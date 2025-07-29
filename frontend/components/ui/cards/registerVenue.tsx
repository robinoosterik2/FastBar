"use client";
import {
  Form,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
} from "@heroui/react";
import Button from "@/components/ui/buttons/button";
import Password from "@/components/ui/inputs/password";
import { useState } from "react";
import React from "react";
import { usePageTranslations } from "@/app/hooks/usePageTranslations";
import { Link } from "@/i18n/navigation";

interface VenueFormData {
  // Owner details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  // Venue details
  venueName: string;
  venuePhone: string;
  venueEmail: string;
  website: string;
  description: string;

  // Address
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  // Settings
  isPublic: boolean;
  isSearchable: boolean;

  // Business verification
  businessRegistration: string;
  taxId: string;

  // Agreement
  termsAccepted: boolean;
  marketingConsent: boolean;
}

export default function VenueRegisterCard() {
  const { t } = usePageTranslations("venueRegister");
  const [action, setAction] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<VenueFormData | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Form state
  const [formData, setFormData] = useState<VenueFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    venueName: "",
    venuePhone: "",
    venueEmail: "",
    website: "",
    description: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    isPublic: true,
    isSearchable: true,
    businessRegistration: "",
    taxId: "",
    termsAccepted: false,
    marketingConsent: false,
  });

  const [errorsPassword, setErrorsPassword] = useState<string[]>([]);
  const [errorsConfirmPassword, setErrorsConfirmPassword] = useState<string[]>(
    []
  );
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Password validation
  React.useEffect(() => {
    const newErrors: string[] = [];

    if (formData.password.length > 0) {
      if (formData.password.length < 8) {
        newErrors.push("Password must be at least 8 characters long");
      }
      if ((formData.password.match(/[A-Z]/g) || []).length < 1) {
        newErrors.push("Password must include at least 1 uppercase letter");
      }
      if ((formData.password.match(/[a-z]/g) || []).length < 1) {
        newErrors.push("Password must include at least 1 lowercase letter");
      }
      if ((formData.password.match(/[0-9]/g) || []).length < 1) {
        newErrors.push("Password must include at least 1 number");
      }
      if ((formData.password.match(/[^a-zA-Z0-9]/g) || []).length < 1) {
        newErrors.push("Password must include at least 1 special character");
      }
    }

    setErrorsPassword(newErrors);

    const newConfirmErrors: string[] = [];
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newConfirmErrors.push("Passwords do not match");
    }
    setErrorsConfirmPassword(newConfirmErrors);
  }, [formData.password, formData.confirmPassword]);

  const updateFormData = (field: keyof VenueFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific errors when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    switch (step) {
      case 1: // Owner Information
        if (!formData.firstName.trim())
          errors.firstName = "First name is required";
        if (!formData.lastName.trim())
          errors.lastName = "Last name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.phone.trim()) errors.phone = "Phone number is required";
        if (!formData.password) errors.password = "Password is required";
        if (errorsPassword.length > 0)
          errors.password = "Please fix password requirements";
        if (errorsConfirmPassword.length > 0)
          errors.confirmPassword = "Please fix password confirmation";
        break;

      case 2: // Venue Information
        if (!formData.venueName.trim())
          errors.venueName = "Venue name is required";
        if (!formData.venuePhone.trim())
          errors.venuePhone = "Venue phone is required";
        if (!formData.venueEmail.trim())
          errors.venueEmail = "Venue email is required";
        if (!formData.description.trim())
          errors.description = "Venue description is required";
        break;

      case 3: // Address & Business
        if (!formData.street.trim())
          errors.street = "Street address is required";
        if (!formData.city.trim()) errors.city = "City is required";
        if (!formData.state.trim()) errors.state = "State/Province is required";
        if (!formData.postalCode.trim())
          errors.postalCode = "Postal code is required";
        if (!formData.country.trim()) errors.country = "Country is required";
        if (!formData.businessRegistration.trim())
          errors.businessRegistration = "Business registration is required";
        break;

      case 4: // Final Review
        if (!formData.termsAccepted)
          errors.termsAccepted = "You must accept the terms and conditions";
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateStep(currentStep) && currentStep === totalSteps) {
      setAction("Venue registration submitted successfully!");
      setSubmitted(formData);
      console.log("Venue Registration Data:", formData);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <React.Fragment key={i}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
              i + 1 <= currentStep
                ? "bg-primary text-white border-primary"
                : "bg-gray-100 text-gray-400 border-gray-300"
            }`}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`w-16 h-1 transition-colors ${
                i + 1 < currentStep ? "bg-primary" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Owner Information
        </h3>
        <p className="text-sm text-gray-600 mt-2">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          isRequired
          label="First Name"
          placeholder="Enter your first name"
          value={formData.firstName}
          onValueChange={(value) => updateFormData("firstName", value)}
          errorMessage={formErrors.firstName}
          className="w-full"
        />
        <Input
          isRequired
          label="Last Name"
          placeholder="Enter your last name"
          value={formData.lastName}
          onValueChange={(value) => updateFormData("lastName", value)}
          errorMessage={formErrors.lastName}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          isRequired
          type="email"
          label="Email Address"
          placeholder="your.email@example.com"
          value={formData.email}
          onValueChange={(value) => updateFormData("email", value)}
          errorMessage={formErrors.email}
          className="w-full"
        />
        <Input
          isRequired
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onValueChange={(value) => updateFormData("phone", value)}
          errorMessage={formErrors.phone}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Password
          name="password"
          label="Password"
          placeholder="Create a secure password"
          value={formData.password}
          onValueChange={(value) => updateFormData("password", value)}
          errors={errorsPassword}
          showLabel={true}
          className="w-full"
        />
        <Password
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onValueChange={(value) => updateFormData("confirmPassword", value)}
          errors={errorsConfirmPassword}
          showLabel={true}
          className="w-full"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Venue Information
        </h3>
        <p className="text-sm text-gray-600 mt-2">Tell us about your venue</p>
      </div>

      <Input
        isRequired
        label="Venue Name"
        placeholder="Enter your venue name"
        value={formData.venueName}
        onValueChange={(value) => updateFormData("venueName", value)}
        errorMessage={formErrors.venueName}
        className="w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          isRequired
          type="tel"
          label="Venue Phone"
          placeholder="+1 (555) 123-4567"
          value={formData.venuePhone}
          onValueChange={(value) => updateFormData("venuePhone", value)}
          errorMessage={formErrors.venuePhone}
          className="w-full"
        />
        <Input
          isRequired
          type="email"
          label="Venue Email"
          placeholder="info@yourvenue.com"
          value={formData.venueEmail}
          onValueChange={(value) => updateFormData("venueEmail", value)}
          errorMessage={formErrors.venueEmail}
          className="w-full"
        />
      </div>

      <Input
        label="Website"
        placeholder="https://www.yourvenue.com"
        value={formData.website}
        onValueChange={(value) => updateFormData("website", value)}
        className="w-full"
      />

      <Textarea
        isRequired
        label="Venue Description"
        placeholder="Describe your venue, atmosphere, and what makes it special..."
        value={formData.description}
        onValueChange={(value) => updateFormData("description", value)}
        errorMessage={formErrors.description}
        rows={4}
        className="w-full"
      />

      <div className="space-y-3">
        <Checkbox
          isSelected={formData.isPublic}
          onValueChange={(checked) => updateFormData("isPublic", checked)}
        >
          Make venue publicly visible to users
        </Checkbox>
        <Checkbox
          isSelected={formData.isSearchable}
          onValueChange={(checked) => updateFormData("isSearchable", checked)}
        >
          Allow venue to appear in search results
        </Checkbox>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Address & Business Details
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Location and business verification
        </p>
      </div>

      <Input
        isRequired
        label="Street Address"
        placeholder="123 Main Street"
        value={formData.street}
        onValueChange={(value) => updateFormData("street", value)}
        errorMessage={formErrors.street}
        className="w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          isRequired
          label="City"
          placeholder="Enter city"
          value={formData.city}
          onValueChange={(value) => updateFormData("city", value)}
          errorMessage={formErrors.city}
          className="w-full"
        />
        <Input
          isRequired
          label="State/Province"
          placeholder="Enter state or province"
          value={formData.state}
          onValueChange={(value) => updateFormData("state", value)}
          errorMessage={formErrors.state}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          isRequired
          label="Postal Code"
          placeholder="12345"
          value={formData.postalCode}
          onValueChange={(value) => updateFormData("postalCode", value)}
          errorMessage={formErrors.postalCode}
          className="w-full"
        />
        <Select
          isRequired
          label="Country"
          placeholder="Select country"
          selectedKeys={formData.country ? [formData.country] : []}
          onSelectionChange={(keys) =>
            updateFormData("country", Array.from(keys)[0] || "")
          }
          errorMessage={formErrors.country}
          className="w-full"
        >
          <SelectItem key="US">United States</SelectItem>
          <SelectItem key="CA">Canada</SelectItem>
          <SelectItem key="UK">United Kingdom</SelectItem>
          <SelectItem key="DE">Germany</SelectItem>
          <SelectItem key="FR">France</SelectItem>
          <SelectItem key="NL">Netherlands</SelectItem>
          <SelectItem key="AU">Australia</SelectItem>
        </Select>
      </div>

      <div className="border-t pt-6 mt-6">
        <h4 className="text-lg font-medium mb-4">Business Verification</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            isRequired
            label="Business Registration Number"
            placeholder="Enter registration number"
            value={formData.businessRegistration}
            onValueChange={(value) =>
              updateFormData("businessRegistration", value)
            }
            errorMessage={formErrors.businessRegistration}
            className="w-full"
          />
          <Input
            label="Tax ID (Optional)"
            placeholder="Enter tax identification number"
            value={formData.taxId}
            onValueChange={(value) => updateFormData("taxId", value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Review & Submit
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Please review your information before submitting
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="font-medium text-foreground">Owner</h4>
          <p className="text-sm text-gray-600">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="text-sm text-gray-600">
            {formData.email} • {formData.phone}
          </p>
        </div>

        <div>
          <h4 className="font-medium text-foreground">Venue</h4>
          <p className="text-sm text-gray-600">{formData.venueName}</p>
          <p className="text-sm text-gray-600">
            {formData.venueEmail} • {formData.venuePhone}
          </p>
          {formData.website && (
            <p className="text-sm text-gray-600">{formData.website}</p>
          )}
        </div>

        <div>
          <h4 className="font-medium text-foreground">Address</h4>
          <p className="text-sm text-gray-600">
            {formData.street}, {formData.city}, {formData.state}{" "}
            {formData.postalCode}, {formData.country}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Checkbox
          isRequired
          isSelected={formData.termsAccepted}
          onValueChange={(checked) => updateFormData("termsAccepted", checked)}
          errorMessage={formErrors.termsAccepted}
        >
          I accept the{" "}
          <Link href="/terms" className="text-primary underline">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary underline">
            Privacy Policy
          </Link>
        </Checkbox>

        <Checkbox
          isSelected={formData.marketingConsent}
          onValueChange={(checked) =>
            updateFormData("marketingConsent", checked)
          }
        >
          I agree to receive marketing communications and venue management tips
        </Checkbox>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Venue Owner Registration
        </h2>
        <p className="text-gray-600">
          Join our platform and start managing your venue digitally
        </p>
      </div>

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-primary underline font-medium">
          Sign in here
        </Link>
      </p>

      {renderStepIndicator()}

      <Form
        className="w-full max-w-2xl bg-white border-2 rounded-2xl p-8 border-primary"
        onSubmit={onSubmit}
      >
        {renderCurrentStep()}

        {action && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center font-medium">{action}</p>
          </div>
        )}

        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <Button
            type="button"
            variant="bordered"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="min-w-24"
          >
            Previous
          </Button>

          <span className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              color="primary"
              onClick={nextStep}
              className="min-w-24"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              color="primary"
              className="min-w-24"
              disabled={!formData.termsAccepted}
            >
              Submit Registration
            </Button>
          )}
        </div>
      </Form>

      <div className="text-center text-sm text-gray-500 mt-4">
        <p>
          Need help? Contact our support team at{" "}
          <a
            href="mailto:support@fastbar.com"
            className="text-primary underline"
          >
            support@fastbar.com
          </a>
        </p>
      </div>
    </div>
  );
}
