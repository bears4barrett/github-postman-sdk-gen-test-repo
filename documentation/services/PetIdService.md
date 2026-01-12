# PetIdService

A list of all methods in the `PetIdService` service. Click on the method name to view detailed information about that method.

| Methods                                                                                 | Description                                    |
| :-------------------------------------------------------------------------------------- | :--------------------------------------------- |
| [find_pet_by_id](#find_pet_by_id)                                                       | Returns a single pet.                          |
| [updates_a_pet_in_the_store_with_form_data](#updates_a_pet_in_the_store_with_form_data) | Updates a pet resource based on the form data. |
| [deletes_a_pet](#deletes_a_pet)                                                         | Delete a pet.                                  |

## find_pet_by_id

Returns a single pet.

- HTTP Method: `GET`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type | Required | Description |
| :----- | :--- | :------- | :---------- |
| pet_id | str  | ✅       |             |
| accept | str  | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

result = sdk.pet_id.find_pet_by_id(
    pet_id="petId",
    accept="application/json"
)

print(result)
```

## updates_a_pet_in_the_store_with_form_data

Updates a pet resource based on the form data.

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type | Required | Description                            |
| :----- | :--- | :------- | :------------------------------------- |
| pet_id | str  | ✅       |                                        |
| accept | str  | ✅       |                                        |
| name   | str  | ❌       | Name of pet that needs to be updated   |
| status | str  | ❌       | Status of pet that needs to be updated |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

result = sdk.pet_id.updates_a_pet_in_the_store_with_form_data(
    pet_id="petId",
    accept="application/json",
    name="ea in enim",
    status="ea in enim"
)

print(result)
```

## deletes_a_pet

Delete a pet.

- HTTP Method: `DELETE`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name    | Type | Required | Description |
| :------ | :--- | :------- | :---------- |
| pet_id  | str  | ✅       |             |
| api_key | str  | ✅       |             |

**Return Type**

`any`

**Example Usage Code Snippet**

```python
from swagger_petstore import SwaggerPetstore, Environment

sdk = SwaggerPetstore(
    api_key="YOUR_API_KEY",
    api_key_header="YOUR_API_KEY_HEADER",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

result = sdk.pet_id.deletes_a_pet(
    pet_id="petId",
    api_key="ea in enim"
)

print(result)
```
