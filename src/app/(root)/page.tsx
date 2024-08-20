import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import RecentTransactions from '@/components/RecentTransactions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser()
    const user_id = loggedIn.$id
    const accounts = await getAccounts({ userId: user_id })

    if (!accounts) return;
    const accountData = accounts?.data
    const appwriteItemId = (id as string) || accountData[0]?.appwriteItemId
    const account = await getAccount({ appwriteItemId })
    return (
        <section className='home flex-wrap'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Access and manage your accounts and transactions efficiently." />
                    <TotalBalanceBox accounts={accountData} totalBanks={accounts.totalBanks} totalCurrentBalance={accounts.totalCurrentBalance} />
                </header>
                <RecentTransactions accounts={account.account} transactions={account?.transactions} appwriteItemId={appwriteItemId} page={currentPage} />

            </div>
            <RightSidebar user={loggedIn} transactions={account?.transactions} banks={accountData?.slice(0, 2)} />
        </section>
    )
}

export default Home