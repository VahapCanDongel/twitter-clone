import LeftLink from "./LeftLink";
import TweetButton from "./TweetButton";

const LeftNav = () => {
  return (
    <div className="w-[33%] flex flex-col items-center p-4">
      <div className="flex flex-col gap-6">
        <svg
          width="40"
          height="40"
          className="fill-white ml-4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.633 7.994c.013.175.013.349.013.523 0 5.325-4.053 11.46-11.46 11.46A11.38 11.38 0 0 1 2 18.169c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05a4.05 4.05 0 0 0 1.82.51 4.022 4.022 0 0 1-1.796-3.353c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.024 4.024 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973c-.3.93-.93 1.72-1.771 2.22a8.074 8.074 0 0 0 2.319-.624 8.646 8.646 0 0 1-2.019 2.083Z"></path>
        </svg>

        <LeftLink
          link_name={"Home"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.743 12.332-9-10c-.38-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14.002h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.67ZM12 16.002a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path>
            </svg>
          }
        />
        <LeftLink
          link_name={"Explore"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.75 20.063-5.816-5.818a7.523 7.523 0 0 0 1.44-4.433c0-4.17-3.393-7.562-7.562-7.562-4.17 0-7.562 3.392-7.562 7.562s3.392 7.562 7.562 7.562a7.523 7.523 0 0 0 4.433-1.44l5.818 5.816 1.687-1.688ZM9.812 14.986a5.174 5.174 0 1 1-.002-10.35 5.174 5.174 0 0 1 0 10.349Z"></path>
            </svg>
          }
        />
        <LeftLink
          link_name={"Notifications"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m20.52 15.208-1.8-1.81v-4.46a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81a1.64 1.64 0 0 0 1.16 2.79H8v.34a3.84 3.84 0 0 0 4 3.66 3.84 3.84 0 0 0 4-3.66v-.34h3.36a1.64 1.64 0 0 0 1.16-2.79ZM14 18.338a1.88 1.88 0 0 1-2 1.66 1.88 1.88 0 0 1-2-1.66v-.34h4v.34Zm-8.49-2.34 1.18-1.18a2 2 0 0 0 .59-1.42v-4.67a4.73 4.73 0 0 1 1.62-3.56 4.67 4.67 0 0 1 3.74-1.17 4.86 4.86 0 0 1 4.08 4.9v4.5a2.001 2.001 0 0 0 .58 1.42l1.19 1.18H5.51Z"></path>
            </svg>
          }
        />

        <LeftLink
          link_name={"Messages"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2Zm0 2v.511l-8 6.223-8-6.222V6h16ZM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4Z"></path>
            </svg>
          }
        />

        <LeftLink
          link_name={"Lists"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z"></path>
              <path d="M15.75 17a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75Z"></path>
              <path
                fill-rule="evenodd"
                d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695H7ZM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          }
        />

        <LeftLink
          link_name={"Bookmarks"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1Zm13 2H6v15.432l6-3.761 6 3.761V4Z"></path>
            </svg>
          }
        />
        <LeftLink
          link_name={"Verified"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm2.259 5.692 1.13.987-3.45 3.942-1.13-1.081 3.45-3.848ZM8.997 16.06l-3.308-3.31 1.061-1.06L10.058 15l-1.061 1.06Zm3.047.037L8.698 12.75l1.06-1.06 2.212 2.213 5.209-5.961 1.13.987-6.265 7.169Z"></path>
            </svg>
          }
        />

        <LeftLink
          link_name={"Profile"}
          icon={
            <svg
              width="31"
              height="31"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
              <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
            </svg>
          }
        />

        <LeftLink
          link_name={"More"}
          icon={
            <svg
              width="31"
              height="31"
              fill="none"
              className="stroke-white"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-white"
                stroke="none"
                d="M12 13.219a1.219 1.219 0 1 0 0-2.438 1.219 1.219 0 0 0 0 2.438Z"
              ></path>
              <path
                className="fill-white"
                stroke="none"
                d="M12 17.438A1.219 1.219 0 1 0 12 15a1.219 1.219 0 0 0 0 2.438Z"
              ></path>
              <path
                className="fill-white"
                stroke="none"
                d="M12 9a1.219 1.219 0 1 0 0-2.438A1.219 1.219 0 0 0 12 9Z"
              ></path>
              <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z"></path>
            </svg>
          }
        />
        <TweetButton/>
      </div>

    </div>
  );
};
export default LeftNav;
