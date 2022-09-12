import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_name: 'Author',
        book_title: 'Title',
        copyright_date: 'Copyright',
        isbn: 'ISBN',
    },
    reducers: {
        chooseAuthor: (state, action) => { state.author_name = action.payload },
        chooseTitle: (state, action) => { state.book_title = action.payload },
        chooseCopyright: (state, action) => { state.copyright_date = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseAuthor, chooseTitle, chooseCopyright, chooseISBN } = rootSlice.actions;