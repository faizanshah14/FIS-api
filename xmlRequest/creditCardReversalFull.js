'use strict'

exports.xmlBody = ({AccountID, AccountToken, AcceptorID, ApplicationID})=>{
    return `
    <CreditCardReversal xmlns="https://transaction.elementexpress.com">
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
		<TransactionID>336784777</TransactionID>
		<TransactionAmount>94.00</TransactionAmount>
		<MarketCode>3</MarketCode>
		<ReferenceNumber>${Math.random().toString().substring(2, 11) }</ReferenceNumber>
		<TicketNumber>${Math.random().toString().substring(2, 11) }</TicketNumber>
		<ReversalType>1</ReversalType>
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
</CreditCardReversal>
    `
}