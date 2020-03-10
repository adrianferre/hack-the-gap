import ActionAssessment from '@material-ui/icons/AssessmentRounded'
import AvLibraryBooks from '@material-ui/icons/LibraryBooksRounded'
import SocialNotifications from '@material-ui/icons/NotificationsRounded'
import BusinessCenter from '@material-ui/icons/BusinessCenterRounded'

export default [
  {
    key: 'overview',
    Icon: ActionAssessment,
    text: 'Resumen',
    pathname: '/overview'
  },
  {
    key: 'activities',
    Icon: SocialNotifications,
    text: 'Actividades',
    pathname: '/activities'
  },
  {
    key: 'prospects',
    Icon: AvLibraryBooks,
    text: 'Prospectos',
    pathname: '/prospects'
  },
  {
    key: 'admin',
    Icon: BusinessCenter,
    text: 'Administración',
    pathname: '/admin/integrations'
  }
]
