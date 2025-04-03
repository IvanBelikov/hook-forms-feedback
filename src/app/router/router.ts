import { createBrowserRouter } from 'react-router'

import { publicPath, protectedPath } from './config'

export const router = createBrowserRouter([publicPath, protectedPath])
