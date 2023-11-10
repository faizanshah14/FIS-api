'use strict'

//this file will return an xml request body
//for a credit card sale
//terminal class
/*
Possible parameters for credit card sale
List of possible elements expected : 'PINEncryptionWorkingKey, TerminalEMVKernelVersion, LaneNumber, StoreCardID, MessageAuthenticationWorkingKey, ChipConditionCode, OperatorID, TerminalType, TerminalEncryptionFormat, TerminalSerialNumber, TerminalModel, TerminalPinCapability, SoftPOSID, GlobalTerminalType, StoreCardPassword, MessageEncryptionWorkingKey, ConsentCode'


*/

/* 
required parameters 
CardholderPresentCode 7 ECommerce
CardInputCode 4 ManualKeyed
CardPresentCode 3 NotPresent
CVVPresenceCode 1 or 2 NotProvided or Provided
MarketCode 3 ECommerce
MotoECICode 7 NonAuthenticatedSecureECommerceTransaction
TerminalCapabilityCode 5 KeyEntered
TerminalEnvironmentCode 6 ECommerce
TerminalType 2 ECommerce
Other Parameters Input Values
TerminalID Element-assigned TerminalID (feel free to use 0001 just for testing
purposes)
ReferenceNumber unique numeric value <= 16 digits recommended
TicketNumber unique numeric value <= 6 digits recommended
BillingAddress1 e.g. 123 Main Street
BillingZipcode e.g. 87654
CVV e.g. 123
PartialApprovedFlag 1 or 0 True or False (optional)
DuplicateOverrideFlag (if
handling duplicates) 1
True (resend transaction with DuplicateOverrideFlag set to True (1) if
ExpressResponseCode=22 or 23)
*/
exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID}) => {
    return `
            <CreditCardSale xmlns="https://transaction.elementexpress.com">
            <Credentials>
                <AccountID>${AccountID}</AccountID>
                <AccountToken>${AccountToken}</AccountToken>
                <AcceptorID>${AcceptorID}</AcceptorID>
            </Credentials>
            <Application>
                <ApplicationID>${ApplicationID}</ApplicationID>
                <ApplicationName>XML Test Example</ApplicationName>
                <ApplicationVersion>1.00</ApplicationVersion>
            </Application>
            <Card>
                <MagneprintData></MagneprintData>
                <EncryptedTrack2Data></EncryptedTrack2Data>
                <EncryptedTrack1Data></EncryptedTrack1Data>
                <EncryptedCardData></EncryptedCardData>
                <CardDataKeySerialNumber></CardDataKeySerialNumber>
                <EncryptedFormat></EncryptedFormat>
                <Track2Data></Track2Data>
                <Track1Data></Track1Data>
                <CardNumber>2223000048400011</CardNumber>
                <ExpirationMonth>12</ExpirationMonth>
                <ExpirationYear>25</ExpirationYear>
                <CVV>382</CVV>
            </Card>
            <Transaction>
                <TransactionAmount>94.00</TransactionAmount>
                <MarketCode>0</MarketCode>
                <ReferenceNumber>123456</ReferenceNumber>
                <TicketNumber>123456</TicketNumber>
                <PartialApprovedFlag>1</PartialApprovedFlag>
                <DuplicateCheckDisableFlag>1</DuplicateCheckDisableFlag>
                <PaymentType>0</PaymentType>
                <SubmissionType>0</SubmissionType>
                <NetworkTransactionID></NetworkTransactionID>
            </Transaction>
            <Terminal>
                <TerminalID>0001</TerminalID>
                <CardholderPresentCode>7</CardholderPresentCode>
                <CardInputCode>4</CardInputCode>
                <CardPresentCode>3</CardPresentCode>
                <CVVPresenceCode>1</CVVPresenceCode>
                <TerminalCapabilityCode>5</TerminalCapabilityCode>
                <TerminalEnvironmentCode>6</TerminalEnvironmentCode>
                <TerminalType>2</TerminalType>
                <MotoECICode>7</MotoECICode>
            </Terminal>
            <ExtendedParameters>
            </ExtendedParameters>
        </CreditCardSale>
    `
}