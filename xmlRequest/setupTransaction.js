'use strict'

exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID})=>{
    return `
        <TransactionSetup xmlns="https://transaction.elementexpress.com">
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
        <TransactionSetup>
            <TransactionSetupID></TransactionSetupID>
            <TransactionSetupMethod>1</TransactionSetupMethod>
            <DeviceInputCode>0</DeviceInputCode>
            <Device>0</Device>
            <Embedded>1</Embedded>
            <CVVRequired>0</CVVRequired>
            <CompanyName></CompanyName>
            <LogoURL></LogoURL>
            <Tagline></Tagline>
            <AutoReturn>1</AutoReturn>
            <WelcomeMessage></WelcomeMessage>
            <ReturnURL>http://localhost:3000</ReturnURL>
            <ReturnURLTitle></ReturnURLTitle>
            <OrderDetails></OrderDetails>
        </TransactionSetup>
        <PaymentAccount>
            <PaymentAccountID></PaymentAccountID>
            <PaymentAccountReferenceNumber>123</PaymentAccountReferenceNumber>
            <PaymentAccountType>0</PaymentAccountType>
        </PaymentAccount>
        <Address>
            <BillingAddress1>123 Main</BillingAddress1>
            <BillingZipcode>33606</BillingZipcode>
        </Address>
        <Transaction>
            <ApprovalNumber></ApprovalNumber>
            <TransactionAmount>2.00</TransactionAmount>
            <MarketCode>3</MarketCode>
        <ReferenceNumber>${Math.random().toString().substring(2, 11) }</ReferenceNumber>
            <DuplicateCheckDisableFlag>1</DuplicateCheckDisableFlag>
        </Transaction>
        <Terminal>
            <TerminalID>01</TerminalID>
            <CVVPresenceCode>0</CVVPresenceCode>
            <CardPresentCode>0</CardPresentCode>
            <CardholderPresentCode>0</CardholderPresentCode>
            <CardInputCode>0</CardInputCode>
            <TerminalCapabilityCode>0</TerminalCapabilityCode>
            <TerminalEnvironmentCode>0</TerminalEnvironmentCode>
            <MotoECICode>0</MotoECICode>
        </Terminal>
    </TransactionSetup>
    `
}