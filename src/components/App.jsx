import { Profile } from './Profile';
import user from '../json/user.json';
import { Statistics } from './Statistics';
import data from '../json/data.json';
import { FriendList } from './FriendList';
import friends from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../json/transactions.json';


export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}      
      />

      <Statistics 
        title="Upload Stats"
        stats={data} />
    
      <FriendList 
        friends={friends} />

      <TransactionHistory 
        items={transactions} />


    </div>
  );
};
