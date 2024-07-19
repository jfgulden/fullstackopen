```mermaid
sequenceDiagram
    participant browser
    participant server
    
      Note right of browser: Add the note to notes array, update DOM and then update the server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (Content-type: application/json)
    activate server
    server-->>browser: HTTP status code 201 created
    deactivate server
```
