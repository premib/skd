import SocialLink from "./social-link";

const SocialLinks: React.FC = () => {
  return (
    <div className="mb-10 flex flex-col justify-center">
      <p className="mb-4 text-center text-base font-bold leading-6">
        You can also find me at
      </p>
      <div className="flex justify-center space-x-5">
        <SocialLink
          href="https://www.linkedin.com/in/gao-shanghui-b503b1227/"
          ariaLabel="LinkedIn profile"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M7.60001 20H4.2V9.3H7.60001V20ZM5.9 7.8C4.8 7.8 4 7 4 5.9C4 4.8 4.9 4 5.9 4C7 4 7.8 4.8 7.8 5.9C7.8 7 7 7.8 5.9 7.8ZM20 20H16.6V14.2C16.6 12.5 15.9 12 14.9 12C13.9 12 12.9 12.8 12.9 14.3V20H9.5V9.3H12.7V10.8C13 10.1 14.2 9 15.9 9C17.8 9 19.8 10.1 19.8 13.4V20H20Z"
              fill="#2563EB"
            />
          </svg>
        </SocialLink>
      </div>
    </div>
  );
};

export default SocialLinks;
