'use strict'

exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID})=>{
    return  `
    <CreditCardAuthorizationCompletion xmlns="https://transaction.elementexpress.com">
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
    <Transaction>
        <TransactionID>308406734</TransactionID>
        <TransactionAmount>60.00</TransactionAmount>
        <OriginalAuthorizedAmount>0.00</OriginalAuthorizedAmount>
        <SalesTaxAmount>0.00</SalesTaxAmount>
        <TipAmount>0.00</TipAmount>
        <CashBackAmount>0.00</CashBackAmount>
        <ReferenceNumber>123456</ReferenceNumber>
        <TicketNumber>123456</TicketNumber>
        <MarketCode>0</MarketCode>
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
        <CVVPresenceCode>0</CVVPresenceCode>
        <CardInputCode>0</CardInputCode>
        <CardholderPresentCode>0</CardholderPresentCode>
        <MotoECICode>0</MotoECICode>
    </Terminal>
</CreditCardAuthorizationCompletion>
    `
}