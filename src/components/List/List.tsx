import React from 'react';
// Styling
import './List.css';
// Types
import { TGitHubUser, TGitHubItem } from '../../types';

type TListProps = {
  items: Array<TGitHubItem>,
};

type TListItemProps = {
  title: string,
  state: string,
  url: string,
  user: TGitHubUser,
};

const ListItem = ({ title, url, state, user: { id } }: TListItemProps) => (
  <li className='list-item'>
    <a href={url} target="_blank" rel="noreferrer">
      <span className='id'>ID: {id}</span>
      <span className='title'>{title}</span>
      <span className='state'>{state.toUpperCase()}</span>
    </a>
  </li>
);

const List = ({ items }: TListProps) => {
  return (<ul className='list'>
    { items.map(({id, ...item}) =>
      <ListItem key={id} {...item} />)
    } 
  </ul>);
};

export default List;
