
## CRUD Routes
There are 4 common actions you will generally need for a resource: 

- Create, 
- Read, 
- Update, 
- Delete (CRUD).

This translates to 8 typical routes:

    Index - Shows all the records
    New - Renders a form for creating a new record
    Create - Processes the new form submission, handling errors and creating the record
    Show - Renders a specific record for viewing
    Edit - Renders a form for updating a specific record
    Update (full) - Handles the edit form submission, handling errors and updating the entire record, and typically triggered by a PUT request.
    Update (partial) - Handles the edit form submission, handling errors and updating specific attributes of the record, and typically triggered by a PATCH request.
    Destroy - Handles deleting a specific record


[Resource Link](https://guides.rubyonrails.org/getting_started.html#crud-routes)