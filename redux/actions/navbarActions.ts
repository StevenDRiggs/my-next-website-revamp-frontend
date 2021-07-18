import { createAction } from '@reduxjs/toolkit'


export const changeCurrentPage = createAction('CHANGE_CURRENT_PAGE', ({ pageId }) => pageId)
