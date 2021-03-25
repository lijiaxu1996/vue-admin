import Vue from 'vue'
import { Button } from 'element-ui'
import {Input,Form,FormItem,Message,Header,Aside,Main,Footer,Container,Notification,
    Menu,
    MenuItem,
    MenuItemGroup,
    Submenu,
    breadcrumb,
    breadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Pagination,
    Dialog,
    MessageBox,
    Radio,
    RadioGroup,
    Option,
    Select
} from 'element-ui'
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$msg = Message;
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Container);
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu);
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Option)
Vue.use(Select)
Vue.prototype.$notify = Notification;
Vue.prototype.$confirm=MessageBox.confirm;
