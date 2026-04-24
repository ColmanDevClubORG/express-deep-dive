## 1. main (Initial Setup)

**Concept:**
Setting up Express with TypeScript and basic configurations.

**Mission:**
Configure the server to read the port from an environment variable (`process.env.PORT`) with a fallback to `3000`.

## 2. mcp architecture (Folder Structure)

**Concept:**
Moving from a single file to a modular Routes Controllers Models architecture.

**Mission:**
Add a new **User** entity. Create the corresponding files:

* `user.routes.ts`
* `user.controller.ts`
* `user.model.ts`

Return a mock list of users from a `GET` request.

## 3. add swagger (API Documentation)

**Concept:**
Documenting endpoints using OpenAPI / Swagger.

**Mission:**
Add Swagger documentation for your new **User** routes.
Make sure the schema for a **User** is visible in the **Schemas** section at the bottom of the UI.

## 4. add global middleware (Intro to Middlewares)

**Concept:**
Understanding how to intercept requests.

**Mission:**
Create a `requestTime` middleware.
It should attach the current timestamp to the `req` object so it can be used by any controller.

## 5. apply global middleware for all routes (Middleware Scope)

**Concept:**
Global vs. route-specific middleware application.

**Mission:**
Create a **Maintenance Mode** middleware.
If an `isMaintenance` variable is set to `true`, return a **503 Service Unavailable** error for every route in the app.

## 6. add global error handling (Centralized Errors)

**Concept:**
Using a single source of truth for handling errors.

**Mission:**
Implement a **Forbidden** error.
In your `UserController`, throw an `AppError` with a `403` status if a certain condition is met (e.g., if a user is marked as inactive).

## 7. add example service (The Service Layer)

**Concept:**
Moving business logic out of the controller to keep it thin.

**Mission:**
Refactor your **User** logic.
Move all data manipulation (finding, filtering, creating users) from `user.controller.ts` into a new `user.service.ts`.

## 8. add validations with zod (Runtime Type Safety)

**Concept:**
Adding runtime validation and type safety using Zod.

**Mission:**
Validate incoming request data (e.g., creating a user) using Zod schemas.
Ensure invalid input returns a proper validation error.
