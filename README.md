# ZenMeUp Server

This repository is a JSON server created to feed data into the React application **ZenMeUp**.

- **Client Repo:** [ZenMeUp Client](https://github.com/abenedicti/zen-me-up-app)
- **Server Repo:** [ZenMeUp Server](https://github.com/abenedicti/zen-me-up-server)

---

## Server Structure

### Collections

#### Programs

Each program object has the following structure:

```json
  "programs": [
    {
      "id",
      "title",
      "description",
    },
  ]
 "sessions": [
    {
      "id",
      "programId",
      "title",
      "audioUrl",
      "imgUrl",
      "author",
      "duration",
      "description",
      "userReflection",
    }
 ]
```

## Used API Endpoints in the App

| HTTP Method | URL                    | Request Body                                                          | Description                                     |
| ----------- | ---------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| GET         | `/programs`            |                                                                       | Sends all programs                              |
| GET         | `/programs/:programId` |                                                                       | Sends details of a specific program             |
| GET         | `/sessions`            |                                                                       | Sends all sessions                              |
| GET         | `/sessions/:sessionId` |                                                                       | Sends details of a specific session             |
| POST        | `/programs`            | `{title, description}`                                                | Creates a new program                           |
| POST        | `/sessions`            | `{programId, title, audioUrl, imgUrl, author, duration, description}` | Creates a new session                           |
| PUT         | `/programs/:programId` | `{title, description}`                                                | Edits a program object                          |
| PUT         | `/sessions/:sessionId` | `{title, audioUrl, imgUrl, author, duration, description}`            | Edits a session object                          |
| DELETE      | `/programs/:programId` |                                                                       | Deletes a program                               |
| DELETE      | `/sessions/:sessionId` |                                                                       | Deletes a session                               |
| PATCH       | `/sessions/:sessionId` | `{userReflection}`                                                    | Adds or edits a user's reflection for a session |

## Links

- **Deploy Link:** _(https://zen-me-up-server.onrender.com)_
- **Slides:** _(to be added later)_

## Collaborators

- **Developer:** Annabelle Benedicti
