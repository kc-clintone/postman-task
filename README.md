# Products Management API

A basic CRUD Products Management API using a Postman mock server.

## Base URL

```

https://your-mock-server-url

```

> Yeah create your own collection 😂, or submit a github issue and I'll send you the export file.

---

## Endpoints

### 1. Get All Products

**Request**

```http
GET /products
````

Response

* **200 OK**

```json
[
  { "id": 1, "name": "Laptop", "price": 99999, "currency": "KES", "category": "Electronics" },
  { "id": 2, "name": "Headphones", "price": 19999, "currency": "KES", "category": "Accessories" }
  // ...
]
```

---

### 2. Get Single Product

**Request**

```http
GET /products/:id
```

**Parameters**

* `id` — Product ID

**Responses**

* **200 OK**

```json
{ "id": 1, "name": "Laptop", "price": 99999, "currency": "KES", "category": "Electronics" }
```

* **404 Not Found**

```json
{ "error": "Product not found" }
```

---

### 3. Create Product

**Request**

```http
POST /products
Content-Type: application/json
```

**Body Example**

```json
{
  "name": "Tablet",
  "price": 55000,
  "currency": "KES",
  "category": "Electronics"
}
```

**Response**

* **201 Created**

```json
{ "message": "Product created successfully", "id": 11 }
```

---

### 4. Delete Product

**Request**

```http
DELETE /products/:id
```

**Responses**

* **200 OK**

```json
{ "message": "Product deleted successfully" }
```

* **404 Not Found**

```json
{ "error": "Product does not exist" }
```

---

### 5. Update Product By ID

**Request**

```http
PUT /products/:id
Content-Type: application/json
```

**Body Example**

```json
{
  "name": "Laptop",
  "price": 120000,
  "category": "Electronics"
}
```

**Response**

* **200 OK**

```json
{
  "message": "Product updated successfully",
  "product": { "id": 1, "name": "Laptop", "price": 120000, "category": "Electronics" }
}
```

---

## Fetch and Filter Products JavaScript

You can use the js script in this repository to fetch products and apply filters like **minPrice**, **maxPrice**, **category**, and **limit**:

---

## Example Product Categories & Prices

| Name                | Price (KES) | Category    |
| ------------------- | ----------- | ----------- |
| Laptop              | 99,999      | Electronics |
| Bluetooth Speaker   | 14,999      | Audio       |
| USB-C Charger       | 3,999       | Accessories |
