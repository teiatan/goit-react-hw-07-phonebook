import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;
export const shownContacts = createSelector(
    [contactsSelector, filterSelector],
    (contacts, filterValue) =>
      contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
  );