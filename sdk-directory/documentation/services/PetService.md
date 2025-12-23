# PetService

A list of all methods in the `PetService` service. Click on the method name to view detailed information about that method.

| Methods                                                   | Description                   |
| :-------------------------------------------------------- | :---------------------------- |
| [update_an_existing_pet](#update_an_existing_pet)         | Update an existing pet by Id. |
| [add_a_new_pet_to_the_store](#add_a_new_pet_to_the_store) | Add a new pet to the store.   |

## update_an_existing_pet

Update an existing pet by Id.

- HTTP Method: `PUT`
- Endpoint: `/pet`

**Parameters**

| Name         | Type                                                                  | Required | Description       |
| :----------- | :-------------------------------------------------------------------- | :------- | :---------------- |
| request_body | [UpdateAnExistingPetRequest](../models/UpdateAnExistingPetRequest.md) | ✅       | The request body. |
| accept       | str                                                                   | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment
from swagger_petstore.models import UpdateAnExistingPetRequest

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = UpdateAnExistingPetRequest(
    name="doggie",
    photo_urls=[
        "quis labore"
    ],
    id_=10,
    category={
        "id_": 1,
        "name": "Dogs"
    },
    tags=[
        {
            "id_": 1247667,
            "name": "sint ipsum est pariatur"
        }
    ],
    status="pending"
)

result = sdk.pet.update_an_existing_pet(
    request_body=request_body,
    accept="application/json"
)

print(result)
```

## add_a_new_pet_to_the_store

Add a new pet to the store.

- HTTP Method: `POST`
- Endpoint: `/pet`

**Parameters**

| Name         | Type                                                                    | Required | Description       |
| :----------- | :---------------------------------------------------------------------- | :------- | :---------------- |
| request_body | [AddANewPetToTheStoreRequest](../models/AddANewPetToTheStoreRequest.md) | ✅       | The request body. |
| accept       | str                                                                     | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment
from swagger_petstore.models import AddANewPetToTheStoreRequest

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = AddANewPetToTheStoreRequest(
    name="doggie",
    photo_urls=[
        "quis labore"
    ],
    id_=10,
    category={
        "id_": 1,
        "name": "Dogs"
    },
    tags=[
        {
            "id_": 1247667,
            "name": "sint ipsum est pariatur"
        }
    ],
    status="pending"
)

result = sdk.pet.add_a_new_pet_to_the_store(
    request_body=request_body,
    accept="application/json"
)

print(result)
```
