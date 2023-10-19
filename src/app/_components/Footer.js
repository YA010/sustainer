import { VscGithub } from 'react-icons/vsc';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Link } from '@nextui-org/link';

export default function Footer() {
  return (
    <footer className="pt-10">
      <div className="flex justify-center py-4">
        <Link
          className="basis-14 flex justify-center mr-5"
          href='https://github.com/YA010/sustainer'
          target='_blank'
          rel='noreferrer'
          color="foreground">
          <VscGithub size={24}/>
        </Link>
      
      </div>
      <p className='copyright text-xs text-center my-7'>
          Yusuf© 2023. All rights reserved. This project was done in response to the tech test by switch2zero
      </p>
    </footer>
  )
}
