import { CgProfile, MdLogout } from './icons'
import { applepay, account_manager, orders, credit, googlepay, paypal } from '../assets/images/index'
import { route } from '../models/route.model' 

export const categories = ['Lifestyle', 'Jordan', 'Running', 'Baloncesto', 'Fútbol', 'Gym y training', 'Skateboard', 'Golf', 'Tenis']
export const size = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48']
export const rangePrice = ['0-50', '51-100', '101-150', '151-200', '201-250', '251-300']
export const rangeStars = ['1', '2', '3', '4', '5'] 
export const gender = ['Male', 'Female', 'Child']
export const quantityOptions = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']

export const menuModalUser = [
  { name: "Profile", icon: <CgProfile size={22} />, path: route.profile.path },
  { name: "Logout", icon: <MdLogout size={22} className="text-red-600" />, path: route.root.path },
];

export const profileTabs = [
  { id: 1, name: 'account', title: 'Account', img: account_manager },
  { id: 2, name: 'orders', title: 'Orders', img: orders },
  { id: 3, name: 'comments', title: 'Comments', img: account_manager },
]

export const payments = [
  { name: 'Credit or Debit Card', icon: credit, active: true },
  { name: 'Paypal', icon: paypal, active: false },
  { name: 'Google Pay', icon: applepay, active: false },
  { name: 'Apple Pay', icon: googlepay, active: false },
]

export const filterMenus = [
  { name: 'Category', range: categories },
  { name: 'Price', range: rangePrice },
  { name: 'Size', range: size },
  { name: 'Stars', range: rangeStars },
]