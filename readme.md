

# FIS API Documentation

## **Project Overview**
The FIS API is a Node.js application designed for payment processing. Utilizing Express.js, it offers various payment-related functionalities including transaction setup, credit card authorization, and more.
The Express.js application is set up to listen on a port defined in the environment variables or port 3000 if no port is defined. It has several routes defined:

![alt text for screen readers](/config/imgpsh_fullsize_anim.png "diagram.png")

## Installation and Setup

To set up the FIS API, follow these steps:
Clone the Repository: Obtain the project repository to your local machine.

    git clone https://github.com/faizanshah14/FIS-api

Install Dependencies: In the project directory, install the required dependencies.

    cd FIS-api
    npm install

**Environment Variables: Configure the necessary environment variables in a .env file.**
Start the Server: Use npm to launch the server.

    npm start

## Environment Variables

The application uses the following environment variables:

- `ACCOUNT_ID`: Your account ID.
- `ACCOUNT_TOKEN`: Your account token.
- `ACCEPTOR_ID`: Your acceptor ID.
- `APPLICATION_ID`: Your application ID.
- `API_URL`: The URL of the API you are connecting to.

These variables are used in the `credentials.js` file as follows:

```javascript
module.exports = {
  AccountID: process.env.ACCOUNT_ID,
  AccountToken: process.env.ACCOUNT_TOKEN,
  AcceptorID: process.env.ACCEPTOR_ID,
  ApplicationID: process.env.APPLICATION_ID,
  API_URL : process.env.API_URL
};
```

## Dependencies

The project uses the following dependencies:

- `axios`: A promise-based HTTP client for making requests to external APIs. It's used in this project to make requests to other services.

- `dotenv`: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. It's used in this project to manage environment variables.

- `express`: A fast, unopinionated, and flexible Node.js web application framework. It's used in this project to create the server and define the API routes.

- `express-xml-bodyparser`: A middleware that parses XML bodies from incoming requests and converts them to JSON. It's used in this project to handle XML data in the requests.

- `nodemon`: A utility that monitors for any changes in your source and automatically restarts your server. It's used in this project to improve the development experience by automatically restarting the server whenever a file is changed.

- `xml2js`: A library for parsing XML to JavaScript objects. It's used in this project to convert XML data to JavaScript objects for easier manipulation.

## Imported Modules
1.  `dotenv`: This module loads environment variables from a `.env` file into `process.env`. This is useful for managing sensitive information such as API keys, database credentials, and more.
2.  `express`: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
3.  `callSetupTransaction`: This module is responsible for setting up a transaction.
4.  `callCreditCardAuthorization`: This module handles the process of authorizing a credit card.
5.  `checkQuery`: This module checks a query. The specifics of what this query is and what the check involves are not provided in the given code.
6.  `callCreditCardReversalFull`: This module handles the process of fully reversing a credit card transaction.
7.  `callCreditCardAVSOnly`: This module handles the process of performing an Address Verification System (AVS) check on a credit card.
8.  `callCreditCardSale`: This module handles the process of making a sale with a credit card.
9.  `callCreditCardAuthorizationCompletion`: This module handles the process of completing the authorization of a credit card.
 
## API Endpoints and Usage

The FIS API comprises several endpoints, each handling different aspects of payment processing:
 1. Setup Transaction

		Initiates a new payment transaction.
		Endpoint: /payment
		Method: GET

 2. Credit Card Authorization
 
    Manages the authorization of credit card transactions.
    Endpoint: /creditCardAuthorization
    Method: GET

 3. Credit Card Reversal Full

		Completely reverses a credit card transaction.
		Endpoint: /creditCardReversalFull
		Method: GET

 4. Credit Card Sale
 
		Processes a sale transaction via credit card.
		Endpoint: /creditCardSale
		Method: GET

 5. Credit Card Authorization Completion

		Completes the credit card authorization process.
		Endpoint: /creditCardAuthorizationCompletion
		Method: GET

*For more details on the API's usage, including parameters and expected responses, refer to the comments and documentation within the code, particularly in the services directory.*

## Express.js Application All Endpoints
-  `/payment`: This route sets up a transaction and sends an HTML response with an iframe that points to a URL with the transaction setup ID.
-  `/creditCardAuthorization`: This route authorizes a credit card and sends the result as a response.
-  `/`: This route logs the request query and sends it as a response.
-  `/checkQuery`: This route checks a query and sends the result as a response.
-  `/creditCardReversalFull`: This route fully reverses a credit card transaction and sends the result as a response.
-  `/creditCardAVSOnly`: This route performs an AVS check on a credit card and sends the result as a response.
-  `/creditCardSale`: This route makes a sale with a credit card and sends the result as a response.
-  `/creditCardAuthorizationCompletion`: This route completes the authorization of a credit card and sends the result as a response.

# XML Files

## CheckQuery.xml

1. **`<CheckQuery>`**: This is the root element of the XML. It likely signifies the type of transaction or query being made to the API.

2. **`<Credentials>`**: This element holds authentication and identification information necessary for the API to validate the request.
   - `<AccountID>`: Your unique account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication, ensuring that the request is from an authorized source.
   - `<AcceptorID>`: An identifier for the entity (possibly your application or business) that is accepting or initiating the transaction.

3. **`<Application>`**: Contains information about the application making the request.
   - `<ApplicationID>`: A specific identifier for your application as registered with the service.
   - `<ApplicationName>`: The name of your application. In your function, this is hard-coded as "XML Test Example".
   - `<ApplicationVersion>`: The version of your application. This is set to "1.00" in your code.

4. **`<Transaction>`**: Details about the transaction being processed.
   - `<TransactionID>`: A unique identifier for the transaction. This is hard-coded as "308097766" in your function.
   - `<TransactionAmount>`: The amount involved in the transaction. Set to "1.00" in your example.
   - `<MarketCode>`: Typically used to specify the type of market or transaction environment. It's set to "3" here.
   - `<ReferenceNumber>` and `<TicketNumber>`: These are likely identifiers or reference numbers relevant to the transaction, both set to "123456" in your function.

5. **`<Terminal>`**: Information about the terminal from which the transaction is being made.
   - `<TerminalID>`: An identifier for the terminal, set to "01" in your code.


## CreditCardAuthorization.xml

1. **`<CreditCardAuthorization>`**: The root element, indicating that this XML is for a credit card authorization transaction.

2. **`<Credentials>`**: Contains authentication details.
   - `<AccountID>`: Your account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity accepting the transaction.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: Identifier for your application with the service.
   - `<ApplicationName>`: Name of your application, "XML Test Example" here.
   - `<ApplicationVersion>`: Version of your application, set to "1.00".

4. **`<Card>`**: Details about the credit card being used for the transaction.
   - `<MagneprintData>`, `<EncryptedTrack2Data>`, `<EncryptedTrack1Data>`, `<EncryptedCardData>`, `<CardDataKeySerialNumber>`, `<EncryptedFormat>`: Fields related to the security and encryption of the card data.
   - `<Track2Data>`, `<Track1Data>`: Potentially used for unencrypted card data.
   - `<CardNumber>`: The credit card number.
   - `<ExpirationMonth>`, `<ExpirationYear>`: The expiration date of the card.
   - `<CVV>`: Card verification value.
   - `<CVVResponseCode>`: Response code for the CVV verification.

5. **`<Address>`**: Billing and shipping information.
   - Fields like `<BillingName>`, `<BillingEmail>`, `<BillingPhone>`, `<BillingAddress1>`, `<BillingCity>`, `<BillingState>`, `<BillingZipcode>` and similarly for shipping.

6. **`<Transaction>`**: Transaction details.
   - `<TransactionAmount>`: The amount for the transaction.
   - `<MarketCode>`: Type of market or transaction environment.
   - `<ReferenceNumber>`, `<TicketNumber>`: Transaction identifiers.
   - `<PartialApprovedFlag>`, `<DuplicateCheckDisableFlag>`, `<PaymentType>`, `<SubmissionType>`: Various flags and types for processing the transaction.

7. **`<Terminal>`**: Information about the transaction terminal.
   - `<TerminalID>`: Identifier for the terminal.
   - Additional fields like `<TerminalType>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<CardPresentCode>`, `<CVVPresenceCode>`, `<CardInputCode>`, `<CardholderPresentCode>`, `<MotoECICode>` provide detailed information about the terminal's capabilities and the nature of the transaction.

8. **`<ExtendedParameters>`**: A placeholder for any additional parameters that might be needed.

## CreditCardAuthorizationCompletion.xml


1. **`<CreditCardAuthorizationCompletion>`**: The root element, indicating that this XML is for completing a credit card authorization transaction.

2. **`<Credentials>`**: Contains authentication details.
   - `<AccountID>`: Your account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity accepting the transaction.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: Identifier for your application with the service.
   - `<ApplicationName>`: Name of your application, "XML Test Example" here.
   - `<ApplicationVersion>`: Version of your application, set to "1.00".

4. **`<Transaction>`**: Details about the transaction.
   - `<TransactionID>`: A unique identifier for the transaction. In this example, it's "308406734".
   - `<TransactionAmount>`: The amount for the transaction, set to "60.00".
   - `<OriginalAuthorizedAmount>`: The amount originally authorized, "0.00" in this example.
   - `<SalesTaxAmount>`: The amount of sales tax, "0.00" here.
   - `<TipAmount>`: Any tip amount, "0.00" in this example.
   - `<CashBackAmount>`: Amount of cash back, if applicable, "0.00" here.
   - `<ReferenceNumber>`, `<TicketNumber>`: Transaction identifiers.
   - `<MarketCode>`: Type of market or transaction environment.
   - `<DuplicateCheckDisableFlag>`, `<PaymentType>`, `<SubmissionType>`: Various flags and types for processing the transaction.

5. **`<Terminal>`**: Information about the transaction terminal.
   - `<TerminalID>`: Identifier for the terminal.
   - Additional fields like `<TerminalType>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<CardPresentCode>`, `<CVVPresenceCode>`, `<CardInputCode>`, `<CardholderPresentCode>`, `<MotoECICode>` describe the terminal's features and the nature of the transaction.

## CreditCardAVSOnly.xml

1. **`<CreditCardAVSOnly>`**: The root element, indicating that this XML is specifically for a Credit Card Address Verification System (AVS) only transaction.

2. **`<Credentials>`**: Contains authentication details.
   - `<AccountID>`: The account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity accepting the transaction.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: The identifier for your application with the service.
   - `<ApplicationName>`: The name of your application, set as "XML Test Example" here.
   - `<ApplicationVersion>`: The version of your application, specified as "1.00".

4. **`<Card>`**: Contains credit card information.
   - Fields like `<MagneprintData>`, `<EncryptedTrack2Data>`, `<EncryptedTrack1Data>`, `<EncryptedCardData>`, `<CardDataKeySerialNumber>`, `<EncryptedFormat>` are related to the security and encryption of card data.
   - `<Track2Data>`, `<Track1Data>`, and `<PINBlock>`: Might be used for additional card data or security.
   - `<CardNumber>`: The credit card number.
   - `<ExpirationMonth>` and `<ExpirationYear>`: The card's expiration date.
   - `<CVV>`: Card verification value.

5. **`<Address>`**: Details of billing and shipping address.
   - Contains fields for billing information like `<BillingName>`, `<BillingEmail>`, `<BillingPhone>`, `<BillingAddress1>`, `<BillingCity>`, `<BillingState>`, `<BillingZipcode>` and similar fields for shipping information.

6. **`<Transaction>`**: Specifics of the transaction.
   - `<TransactionAmount>`: The amount involved in the transaction, set to "60.00".
   - `<MarketCode>`: Type of market or transaction environment.
   - `<ReferenceNumber>`, `<TicketNumber>`: Identifiers for the transaction.
   - `<PartialApprovedFlag>`, `<DuplicateCheckDisableFlag>`, `<DuplicateOverrideFlag>`: Various flags for transaction processing.

7. **`<Terminal>`**: Information about the transaction terminal.
   - `<TerminalID>`: Identifier for the terminal.
   - Additional details like `<TerminalType>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<CardPresentCode>`, `<CVVPresenceCode>`, `<CardInputCode>`, `<CardholderPresentCode>`, `<MotoECICode>` provide insights into the terminal's capabilities and the nature of the transaction.

8. **`<ExtendedParameters>`**: A placeholder for any additional parameters that might be needed.

## CreditCardReversalFull.xml

1. **`<CreditCardReversal>`**: The root element, indicating that this XML is specifically for a credit card reversal transaction. A reversal transaction is typically used to cancel or reverse a previously processed transaction.

2. **`<Credentials>`**: Contains authentication details for the transaction.
   - `<AccountID>`: Your account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity accepting or initiating the reversal transaction.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: The identifier for your application with the service.
   - `<ApplicationName>`: The name of your application, set as "XML Test Example" here.
   - `<ApplicationVersion>`: The version of your application, specified as "1.00".

4. **`<Transaction>`**: Specifics of the reversal transaction.
   - `<TransactionID>`: A unique identifier for the original transaction that is being reversed, in this case, "310369983".
   - `<TransactionAmount>`: The amount involved in the original transaction, set to "94.00".
   - `<MarketCode>`: Indicates the type of market or transaction environment.
   - `<ReferenceNumber>`, `<TicketNumber>`: Identifiers associated with the original transaction.
   - `<ReversalType>`: Specifies the type of reversal. The value "1" likely corresponds to a specific kind of reversal defined by the API (e.g., full, partial, etc.).

5. **`<Terminal>`**: Information about the terminal used for the transaction.
   - `<TerminalID>`: Identifier for the terminal, "0001" in this case.
   - Fields like `<CardholderPresentCode>`, `<CardInputCode>`, `<CardPresentCode>`, `<CVVPresenceCode>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<TerminalType>`, `<MotoECICode>` provide detailed information about the terminal's features, the nature of the card's presence during the transaction, and other terminal-specific details.

This XML structure is designed for processing credit card reversal transactions.

## CreditCardSale.xml

1. **`<CreditCardSale>`**: The root element, indicating that this XML is for a credit card sale transaction.

2. **`<Credentials>`**: Contains authentication and identification details for the transaction.
   - `<AccountID>`: Your account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity accepting or initiating the transaction.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: The identifier for your application with the service.
   - `<ApplicationName>`: The name of your application, set as "XML Test Example".
   - `<ApplicationVersion>`: The version of your application, specified as "1.00".

4. **`<Card>`**: Contains credit card information.
   - Fields like `<MagneprintData>`, `<EncryptedTrack2Data>`, `<EncryptedTrack1Data>`, `<EncryptedCardData>`, `<CardDataKeySerialNumber>`, `<EncryptedFormat>` are related to the security and encryption of card data.
   - `<Track2Data>`, `<Track1Data>`: Potentially used for unencrypted card data.
   - `<CardNumber>`: The credit card number.
   - `<ExpirationMonth>` and `<ExpirationYear>`: The card's expiration date.
   - `<CVV>`: Card verification value.

5. **`<Transaction>`**: Details of the transaction.
   - `<TransactionAmount>`: The amount for the transaction, set to "94.00".
   - `<MarketCode>`: Indicates the type of market or transaction environment.
   - `<ReferenceNumber>`, `<TicketNumber>`: Unique numeric identifiers for the transaction.
   - `<PartialApprovedFlag>`: Indicates if partial approvals are accepted.
   - `<DuplicateCheckDisableFlag>`: Flag to disable duplicate checking.
   - `<PaymentType>`, `<SubmissionType>`, `<NetworkTransactionID>`: Other transaction-related parameters.

6. **`<Terminal>`**: Information about the terminal used for the transaction.
   - `<TerminalID>`: Identifier for the terminal, "0001" in this case.
   - Fields like `<CardholderPresentCode>`, `<CardInputCode>`, `<CardPresentCode>`, `<CVVPresenceCode>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<TerminalType>`, `<MotoECICode>` provide detailed information about the terminal's features, the nature of the card's presence during the transaction, and other terminal-specific details.

7. **`<ExtendedParameters>`**: A placeholder for any additional parameters that might be needed.

This XML structure is designed for processing credit card sale transactions.

## SetupTransaction.xml

1. **`<TransactionSetup>`**: The root element, indicating that this XML is for setting up a transaction. It encompasses all other elements and defines the structure and parameters for a transaction setup.

2. **`<Credentials>`**: Contains authentication and identification details.
   - `<AccountID>`: The account identifier with the service provider.
   - `<AccountToken>`: A security token for authentication.
   - `<AcceptorID>`: Identifier for the entity initiating the transaction setup.

3. **`<Application>`**: Information about the application making the request.
   - `<ApplicationID>`: Identifier for your application with the service.
   - `<ApplicationName>`: Name of your application, set as "XML Test Example".
   - `<ApplicationVersion>`: Version of your application, specified as "1.00".

4. **`<TransactionSetup>`**: Specific details for setting up the transaction.
   - `<TransactionSetupID>`: A unique identifier for the transaction setup (left empty in this example).
   - `<TransactionSetupMethod>`: Method of transaction setup, "1" in this case.
   - `<DeviceInputCode>`, `<Device>`: Related to the input method and device used.
   - `<Embedded>`: Indicates if the transaction setup is embedded in another process or system.
   - `<CVVRequired>`: Specifies whether CVV is required for the transaction.
   - `<CompanyName>`, `<LogoURL>`, `<Tagline>`, `<WelcomeMessage>`: Branding and messaging information.
   - `<AutoReturn>`: Indicates automatic return after the transaction.
   - `<ReturnURL>`: URL to return to after the transaction, "http://localhost:3000" here.
   - `<ReturnURLTitle>`: Title for the return URL.
   - `<OrderDetails>`: Additional details about the order (if applicable).

5. **`<PaymentAccount>`**: Details about the payment account.
   - `<PaymentAccountID>`: Identifier for the payment account (left empty here).
   - `<PaymentAccountReferenceNumber>`: Reference number for the payment account, "123" in this example.
   - `<PaymentAccountType>`: Type of payment account, "0" here.

6. **`<Address>`**: Billing address information.
   - `<BillingAddress1>`: Street address, "123 Main" in this example.
   - `<BillingZipcode>`: Zip code, "33606" here.

7. **`<Transaction>`**: Details of the transaction.
   - `<ApprovalNumber>`: Approval number for the transaction (left empty here).
   - `<TransactionAmount>`: Amount for the transaction, "2.00" in this example.
   - `<MarketCode>`: Type of market or transaction environment, "3" here.
   - `<ReferenceNumber>`: Unique numeric identifier for the transaction, "123456".
   - `<DuplicateCheckDisableFlag>`: Flag to disable duplicate checking, "1" in this case.

8. **`<Terminal>`**: Information about the terminal used for the transaction.
   - `<TerminalID>`: Identifier for the terminal, "01" here.
   - `<CVVPresenceCode>`, `<CardPresentCode>`, `<CardholderPresentCode>`, `<CardInputCode>`, `<TerminalCapabilityCode>`, `<TerminalEnvironmentCode>`, `<MotoECICode>`: Detailed terminal-specific information.

This XML structure is designed for initializing or setting up a transaction.