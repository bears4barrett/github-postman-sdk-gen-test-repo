# PetService

A list of all methods in the `PetService` service. Click on the method name to view detailed information about that method.

| Methods                                          | Description                   |
| :----------------------------------------------- | :---------------------------- |
| [updateAnExistingPet\_](#updateanexistingpet_)   | Update an existing pet by Id. |
| [addANewPetToTheStore\_](#addanewpettothestore_) | Add a new pet to the store.   |

## updateAnExistingPet\_

Update an existing pet by Id.

- HTTP Method: `PUT`
- Endpoint: `/pet`

**Parameters**

| Name   | Type                                                                  | Required | Description       |
| :----- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body   | [UpdateAnExistingPetRequest](../models/UpdateAnExistingPetRequest.md) | ✅       | The request body. |
| accept | string                                                                | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  SwaggerPetstore,
  UpdateAnExistingPetRequest,
  UpdateAnExistingPetRequestCategory,
  UpdateAnExistingPetRequestTags,
} from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const updateAnExistingPetRequestCategory: UpdateAnExistingPetRequestCategory = {
    id: 1,
    name: 'Dogs',
  };

  const updateAnExistingPetRequestTags: UpdateAnExistingPetRequestTags = {
    id: 1247667,
    name: 'sint ipsum est pariatur',
  };

  const updateAnExistingPetRequest: UpdateAnExistingPetRequest = {
    name: 'doggie',
    photoUrls: ['quis labore'],
    id: 10,
    category: updateAnExistingPetRequestCategory,
    tags: [updateAnExistingPetRequestTags],
    status: 'pending',
  };

  const { data } = await swaggerPetstore.pet.updateAnExistingPet_(updateAnExistingPetRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```

## addANewPetToTheStore\_

Add a new pet to the store.

- HTTP Method: `POST`
- Endpoint: `/pet`

**Parameters**

| Name   | Type                                                                    | Required | Description       |
| :----- | :---------------------------------------------------------------------- | :------- | :---------------- |
| body   | [AddANewPetToTheStoreRequest](../models/AddANewPetToTheStoreRequest.md) | ✅       | The request body. |
| accept | string                                                                  | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import {
  AddANewPetToTheStoreRequest,
  AddANewPetToTheStoreRequestCategory,
  AddANewPetToTheStoreRequestTags,
  SwaggerPetstore,
} from 'swagger petstore';

(async () => {
  const swaggerPetstore = new SwaggerPetstore({});

  const addANewPetToTheStoreRequestCategory: AddANewPetToTheStoreRequestCategory = {
    id: 1,
    name: 'Dogs',
  };

  const addANewPetToTheStoreRequestTags: AddANewPetToTheStoreRequestTags = {
    id: 1247667,
    name: 'sint ipsum est pariatur',
  };

  const addANewPetToTheStoreRequest: AddANewPetToTheStoreRequest = {
    name: 'doggie',
    photoUrls: ['quis labore'],
    id: 10,
    category: addANewPetToTheStoreRequestCategory,
    tags: [addANewPetToTheStoreRequestTags],
    status: 'pending',
  };

  const { data } = await swaggerPetstore.pet.addANewPetToTheStore_(addANewPetToTheStoreRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
