import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser()
    const user_id = loggedIn.$id
    const accounts = await getAccounts({ userId: user_id })

    if (!accounts) return;
    const accountData = accounts?.data
    const appwriteItemId = (id as string) || accountData[0]?.appwriteItemId
    const account = await getAccount({ appwriteItemId })
    return (
        <div className='transactions'>
            <div className='transactions-header'>
                <HeaderBox title='Transaction History' subtext='See your bank details and transactions.' />
            </div>
            <div className='space-y-6'>
                <div className='transactions-account'>
                    {account.account.map((a: Account) => (
                        <>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-18 font-bold text-white'>{a.name}</h2>
                                <p className='text-14 text-blue-25'>{a.officialName}</p>
                                <p className='text-14 font-semibold tracking-[1.1px] text-white'>●●●● ●●●● ●●●● {a.mask}</p>
                            </div>
                            <div className='transactions-account-balance'>
                                <p className='text-14'>Current balance</p>
                                <p className='text-24 text-center font-bold'>{formatAmount(a.currentBalance)}</p>
                            </div>
                        </>
                    ))}
                </div>

                <section className='flex w-full flex-col gap-6'>
                    <TransactionsTable transactions={account?.transactions} />
                </section>
            </div>
        </div>
    )
}

export default TransactionHistory