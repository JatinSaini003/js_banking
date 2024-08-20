import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferFrom'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Transfer = async () => {
    const loggedIn = await getLoggedInUser()
    const user_id = loggedIn.$id
    const accounts = await getAccounts({ userId: user_id })

    if (!accounts) return;
    const accountData = accounts?.data
    return (
        <section className='payment-transfer'>
            <HeaderBox title='Payment Tranfer' subtext='Please provide any specific details or notes related to the payment transfer' />
            <section className='size-full pt-5'>
                <PaymentTransferForm accounts={accountData} />
            </section>
        </section>
    )
}

export default Transfer