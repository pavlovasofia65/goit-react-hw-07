import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
            (contact) => contact.id === action.payload.id
            );
            state.items.splice(index, 1);
        })
    },
});

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filters.search;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
    }
);