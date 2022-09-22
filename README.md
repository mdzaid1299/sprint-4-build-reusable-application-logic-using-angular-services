## Sprint 4 : Build Reusable Application Logic using Angular Services

### This sprint has 4 demos

[**Demo 1 :: Implement Logging Using Angular Service​**](demo-1-logger-service)

##### Problem Statement

Create a registration component that logs the important information captured during user registration.

The responsibility of logging functionality should be handled by the Angular service.

**Implementation Steps**

1. Create component named `registration` using Angular CLI command.
2. Design registration view by modifying the `registration.component.html` and `registration.component.css` codes. (Refer to the demo solution code provided for designing and styling).
3. The `registration` component should be rendered by `app` component.
4. In the `registration` component's class, define method `register()` that gets invoked when the `Register` button is clicked.
5. Create service named `loggerService` using the Angular CLI command (given below) and ensure the service class gets created under `services` folder.
    `ng generate service services/logger` or `ng g s services/logger`
6. Define methods in `loggerService` class to log messages, debugging details, errors, information on console. (Refer to the solution code for method definitions).
7. To consume `loggerService` in `registration` component, inject the service in the constructor of the `registration` component's class.
    ```typescript
        constructor(private logger: LoggerService) { }
    ```
8. In the `register()` method of the component's class, call the `loggerService` methods to log messages, debugging details, errors, information on console. (Refer to the solution code provided for calling `loggerService` methods).
9. Run the code, enter registration details and click on `Register` button.
10. Open `Console` tab in `developer tools` to check the logs.

[**Demo 2 :: Fruit Fantasy – Add Fruit**](demo-2-add-fruit)

##### Problem Statement

Create a service that makes an HTTP call to `fruits` API launched using `json-server`, to add fruit data.

The service should be consumed by the component who accepts inputs from the user and calls the service method to request server to store the data.

**Implementation Steps**
1. This demo is in continuation to the `demo 3` of `Sprint 3 - Implement Interactions between Angular Components`.
2. Modify the `add-fruit` component's template and style files to create a view that accepts `fruit` details. (Refer to the demo solution code provided for designing and styling)
3. Define property `fruit` of type `Fruit` and implement 2-way binding between component class and template for each of the properties of `fruit` object.
4. In the `add-fruit` component's class, define method `add()` that gets invoked when the `Add` button is clicked.
5. Create service named `fruitService` using the Angular CLI command (given below) and ensure the service class gets created under `services` folder.
    `ng generate service services/fruit` or `ng g s services/fruit`
6. Inject `HttpClient` dependency in `FruitService` class which will be used for making HTTP requests and get `Observable` in return.
7. Run the json-server that serves `fruit` data from `fruits.json` file located under `fruit-fantasy-data` folder.
8. Define string property `URL` and assign it with the request URL for `fruits` API.
9. Define method `addFruit()` in `fruitService` class to make `POST` request with the URL defined in `URL` property along with `fruit` data. The `fruit` data will be received by the parameter in `addFruit()` method. The method should return the Observable returned by the `post` method.
10. To consume `fruitService` in `add-fruit` component, inject the service in the constructor of the `add-fruit` component's class.
    ```typescript
    constructor(private fruit: FruitService) { }
    ```
11. In the `addFruit()` method of the component's class, call the `fruitService` method with `fruit` property data and call `subscribe()` method on the observable returned.
12. The `subscribe()` method will have to raise alert with the message `Fruit Added` for the data received as response from the server.
    ```typescript
        add() {
            if (this.fruit.name)
            this.fruitService.addFruit(this.fruit).subscribe(data => {
                alert("Fruit Added");
                this.fruit = {};
            })
        }
    ```
13. Run the code, enter fruit details and click on `Add` button.
14. Successful operation should result into an alert being raised by the browser with the message `Fruit Added`.

[**Demo 3 :: Fruit Fantasy – Fetch Fruits**](demo-3-fetch-fruits)

##### Problem Statement

Create a service that makes an HTTP call to `fruits` API launched using `json-server`, to fetch the fruits data.

The service should be consumed by the component who then displays the fruits on the view.

**Implementation Steps**
1. This demo is in continuation to the `demo 2` of this sprint. Till the previous sprint, the fruits data was read from `Fruits` array defined in `Fruits.ts` file. 

    In this demo, the data will be read from the server.
2. Define method `getFruits()` in `fruitService` class to make `GET` request with the URL defined in `URL` property to fetch fruits data. The method should return the Observable returned by the `get` method.
3. `FruitManager` component should fetch fruits data from server by consuming `fruitService`. To consume the service, inject the service in the constructor of the `FruitManager` component's class.
    ```typescript
        constructor(private fruit: FruitService) { }
    ```
4. The data should be fetched when the component's property gets initialized and hence implement `OnInit` interface lifecycle method `ngOnInit()` to call `getFruits()` method of the `fruitService`.
5. Call the `subscribe()` method on the observable returned by the `getFruits()` method and for the data returned returned with the response, store it in `fruits` property of the `FruitManager` component.
    ```typescript
        ngOnInit(): void {
            this.fruitService.getFruits().subscribe(data => {
            this.fruits = data;
            })
        }
    ```
6. Run the code and this time the fruits data displayed would be the data received with the response received from the server.
7. Also, modify the code for `onSearchTextChanged()` method to refresh data when search text is cleared.
    ```typescript
        onSearchTextChanged(fruitName: string) {
            if (fruitName || fruitName !== '') {
                this.fruits = this.fruits
                    .filter(fruit => fruit.name?
                        .includes(fruitName));
            }
            else if (fruitName === '')
                this.fruitService
                    .getFruits()
                    .subscribe(data => {
                        this.fruits = data;
                })
        }
    ```
8. To update the `fruits` array in `FruitManager` component, the `add-fruit` component must emit event when the fruit data is successfully sent to the server.
    ```typescript
        @Output()
        fruitAdded: EventEmitter<Fruit> = new EventEmitter<Fruit>();
        add() {
            if (this.fruit.name)
                this.fruitService.addFruit(this.fruit).subscribe(data => {
                    alert("Fruit Added");
                    this.fruitAdded.emit(this.fruit); //event emitted
                    this.fruit = {};
                });
        }
    ```
9. The `FruitManager` component must listen to the event emitted by `add-fruit` component and associate an handler that gets invoked when the event is emitted.
    ```html
        <app-add-fruit (fruitAdded) = "onFruitAdded($event)"></app-add-fruit>
    ```
10. Define the handler method `onFruitAdded()` in `FruitManager` component class to push the fruit added to the `Fruits` array.
    ```typescript
        //event handler
        onFruitAdded(fruit: Fruit) {
            this.fruits.push(fruit);
        }
    ```
[**Demo 4 :: Fruit Fantasy - Handle Error Response**](demo-4-handle-error)

##### Problem Statement

While making API requests, the response need not be always as expected. The response may return with an error due to network unavailability or could be due to incorrect request.

Modify the frontend code that handles the error response and raises alert to notify user about the same.

**Implementation Steps**

1. This demo is in continuation to the `demo 3` of this sprint. In this demo, error handling code will be provided to handle error response received while making HTTP requests.
2. To handle error while making `post` request, modify the `addFruit()` method in `add-fruit.component.ts` file as shown below:
    ```typescript
        add() {
            if (this.fruit.name)
            this.fruitService.addFruit(this.fruit).subscribe({
                next: data => {
                this.fruitAdded.emit(this.fruit);
                this.fruit = {};
                },
                error: e => {
                alert("Failed to Add Fruit due to Network Error !! Please Try Again Later");
                }
            });
        }
    ```
3. To handle error while making `get` request, modify the `ngOnit()` method in `fruit-manager.component.ts` file as shown below:
    ```typescript
        ngOnInit(): void {
            this.fruitService.getFruits().subscribe({
            next: data => {
                this.fruits = data;
            },
            error: e => {
                alert("Network Error !! Please Try Again Later");
            }
            });
        }
    ```
4. Also modify the code in `onSearchTextChanged()` method in `FruitManager` component class as shown below:
    ```typescript
    onSearchTextChanged(fruitName: string) {
        if (fruitName || fruitName !== '') {
            this.fruits = this.fruits.filter(fruit => fruit.name?.includes(fruitName));
        }
        else if (fruitName === '')
            this.fruitService.getFruits().subscribe(data => {
            this.fruits = data;
        })
    }
    ```
5. To test for error handling, change the port in request URL in `fruitService` class with an invalid value.
6. Run the code and observe the alert raised with error message on:
    - app launch
        - fetch operations should fail due to invaid port number
    - adding new fruit
        - add operation should fail due to invalid port number