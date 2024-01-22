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
        <TransactionID>336781540</TransactionID>
        <TransactionAmount>60.00</TransactionAmount>
        <OriginalAuthorizedAmount>0.00</OriginalAuthorizedAmount>
        <SalesTaxAmount>0.00</SalesTaxAmount>
        <TipAmount>0.00</TipAmount>
        <CashBackAmount>0.00</CashBackAmount>
    <ReferenceNumber>${Math.random().toString().substring(2, 11) }</ReferenceNumber>
        <TicketNumber>${Math.random().toString().substring(2, 11) }</TicketNumber>
        <MarketCode>3</MarketCode>
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
</CreditCardAuthorizationCompletion>
    `
}