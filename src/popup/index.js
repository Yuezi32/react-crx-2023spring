import { RouterProvider } from 'react-router-dom'
import { globalRouters } from '@/popup/router'
import './popup.styl'
// 在popup页面调试content script，仅用于开发环境，build前记得要注释掉。
// import '@/content'

function Popup() {
    return <RouterProvider router={globalRouters} />
}

export default Popup