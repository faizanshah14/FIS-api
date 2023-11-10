'use strict'

exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID})=>{

    return `
    <CreditCardAuthorization xmlns="https://transaction.elementexpress.com">
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
        <CardNumber>341111597242000</CardNumber>
        <ExpirationMonth>12</ExpirationMonth>
        <ExpirationYear>22</ExpirationYear>
        <CVV>4321</CVV>
        <CVVResponseCode>M</CVVResponseCode>
    </Card>
    <Address>
        <BillingName></BillingName>
        <BillingEmail></BillingEmail>
        <BillingPhone></BillingPhone>
        <BillingAddress1>4</BillingAddress1>
        <BillingAddress2></BillingAddress2>
        <BillingCity></BillingCity>
        <BillingState></BillingState>
        <BillingZipcode>33333</BillingZipcode>
        <ShippingName></ShippingName>
        <ShippingEmail></ShippingEmail>
        <ShippingPhone></ShippingPhone>
        <ShippingAddress1></ShippingAddress1>
        <ShippingAddress2></ShippingAddress2>
        <ShippingCity></ShippingCity>
        <ShippingState></ShippingState>
        <ShippingZipcode></ShippingZipcode>
        <AddressEditAllowed></AddressEditAllowed>
    </Address>
    <Transaction>
        <TransactionAmount>56.00</TransactionAmount>
        <MarketCode>0</MarketCode>
        <ReferenceNumber>123456</ReferenceNumber>
        <TicketNumber>123456</TicketNumber>
        <PartialApprovedFlag>0</PartialApprovedFlag>
        <DuplicateCheckDisableFlag>0</DuplicateCheckDisableFlag>
        <PaymentType>0</PaymentType>
        <SubmissionType>0</SubmissionType>
    </Transaction>
    <Terminal>
        <TerminalID>01</TerminalID>
        <TerminalType>0</TerminalType>
        <TerminalCapabilityCode>0</TerminalCapabilityCode>
        <TerminalEnvironmentCode>0</TerminalEnvironmentCode>
        <CardPresentCode>0</CardPresentCode>
        <CVVPresenceCode>1</CVVPresenceCode>
        <CardInputCode>0</CardInputCode>
        <CardholderPresentCode>0</CardholderPresentCode>
        <MotoECICode>0</MotoECICode>
    </Terminal>
    <ExtendedParameters>
	</ExtendedParameters>
</CreditCardAuthorization>
    `

}