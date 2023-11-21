'use strict'

exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID})=>{
    return `

    <CheckQuery xmlns="https://transaction.elementexpress.com">
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
        <TransactionID>308097766</TransactionID>
        <TransactionAmount>1.00</TransactionAmount>
        <MarketCode>3</MarketCode>
        <ReferenceNumber>123456</ReferenceNumber>
        <TicketNumber>123456</TicketNumber>
    </Transaction>
    <Terminal>
        <TerminalID>01</TerminalID>
    </Terminal>
</CheckQuery>
    `
}
