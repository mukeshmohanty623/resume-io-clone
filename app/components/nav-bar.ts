import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';



type NavBarMenu = {
   title: string,
   isDropDown: boolean,
   route:string
}
interface NavBarArgs{}

export default class NavBar extends Component<NavBarArgs>{

  @tracked isAuthenticated = false

   menus:Array<NavBarMenu> = [
    {
      title: 'Resume',
      isDropDown: true,
      route: 'resume-templates'
    },
    {
      title: 'Cover Letter',
      isDropDown: true,
      route: 'cover-letter-templates'
    },
    {
      title: 'Resume Writting',
      isDropDown: true,
      route: 'how-to-write-a-resume'
    },
    {
      title: 'Blog',
      isDropDown: false,
      route:'blog'
    },
    {
      title: 'FAQ',
      isDropDown: false,
      route:'faq'
    }
   ];

}
