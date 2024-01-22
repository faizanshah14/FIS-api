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
        <CardNumber>3530111333300000</CardNumber>
        <ExpirationMonth>12</ExpirationMonth>
        <ExpirationYear>22</ExpirationYear>
        <CVV>564</CVV>
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
        <BillingZipcode>33606</BillingZipcode>
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
        <TransactionAmount>10.00</TransactionAmount>
        <MarketCode>3</MarketCode>
    <ReferenceNumber>${Math.random().toString().substring(2, 11) }</ReferenceNumber>
        <TicketNumber>${Math.random().toString().substring(2, 11) }</TicketNumber>
        <PartialApprovedFlag>0</PartialApprovedFlag>
        <DuplicateCheckDisableFlag>0</DuplicateCheckDisableFlag>
        <PaymentType>0</PaymentType>
        <SubmissionType>0</SubmissionType>
    </Transaction>
    <Terminal>
        <TerminalID>0001</TerminalID>
        <CardholderPresentCode>7</CardholderPresentCode>
        <CardInputCode>4</CardInputCode>
        <CardPresentCode>3</CardPresentCode>
        <CVVPresenceCode>2</CVVPresenceCode>
        <TerminalCapabilityCode>5</TerminalCapabilityCode>
        <TerminalEnvironmentCode>6</TerminalEnvironmentCode>
        <TerminalType>2</TerminalType>
        <MotoECICode>7</MotoECICode>
        </Terminal>
    <ExtendedParameters>
	</ExtendedParameters>
</CreditCardAuthorization>
    `

}