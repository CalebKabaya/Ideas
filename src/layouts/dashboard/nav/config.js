// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'home',
    path: '/dashboard/app',
    icon: icon('home-line'),
  },
  {
    title: 'challenges',
    path: '/dashboard/user',
    icon: icon('trophy-01'),
  },
  {
    title: 'support',
    path: '/dashboard/products',
    icon: icon('life-buoy-01'),
  },
  {
    title: 'settings',
    path: '/dashboard/blog',
    icon: icon('settings-01'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
