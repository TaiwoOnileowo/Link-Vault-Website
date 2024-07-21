import testimage1 from "./assets/gif1.mp4";
import testimage2 from "./assets/gif1.mp4";
import testimage3 from "./assets/gif1.mp4";
import { MdDownload } from "react-icons/md";
import { MdOutlinePushPin } from "react-icons/md";
import { MdOutlineAddLink } from "react-icons/md";
import { RxDragHandleHorizontal } from "react-icons/rx";

export const navLinks = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const features = [
  {
    title: "Save and Organize Links",
    description1:
      "Save your favorite links in one place. Automatically save and name your current tab for easy access. No more cluttered bookmarks or tabs.      ",
    description2: "Easily save those important tabs.",
    icon1: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5CE1E6" />
          </linearGradient>
        </defs>
        <path fill="none" d="M0 0h24v24H0"></path>
        <path
          fill="url(#gradient)"
          d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
        ></path>
      </svg>
    ),
    icon2: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] ss:w-[50px] ss:h-[50px] md:w-[45px] md:h-[45px] "
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path fill="none" d="M0 0h24v24H0"></path>
        <path
          fill="url(#gradient)"
          d="M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
        ></path>
      </svg>
    ),
    image: testimage1,
  },
  {
    title: "Search and Edit Links",
    description1:
      "Quickly find and edit your saved links and tabs with the search and edit feature, making it easy to manage your links.",
    description2: "Find and edit your links with ease.",
    icon1: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="url(#gradient)"
          d="M14.73 13.31A6.388 6.388 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
        <path
          fill="url(#gradient)"
          d="M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z"
        ></path>
      </svg>
    ),
    icon2: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="w-[25px] h-[25px] xs:w-[35px] xs:h-[35px] ss:w-[45px] ss:h-[45px] md:w-[35px] md:h-[35px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="url(#gradient)"
          d="M14.73 13.31A6.388 6.388 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
        <path
          fill="url(#gradient)"
          d="M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z"
        ></path>
      </svg>
    ),
    image: testimage2,
  },
  {
    title: " Group Tabs and Links",
    description1:
      "Create groups for your links and tabs to keep them organized and easily accessible.",
    description2: "Group and organize tabs.",
    icon1: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
        ></path>
      </svg>
    ),
    icon2: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-[20px] h-[20px] xs:w-[30px] xs:h-[30px] ss:w-[40px] ss:h-[40px] md:w-[30px] md:h-[30px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
        ></path>
      </svg>
    ),
    image: testimage3,
  },
];
export const more_features = [
  {
    title: "Edit Links",
    description:
      "Wrong Spelling or wrong link? No problem! Edit your links with ease.",

    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 576 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Copy and Share Links",
    description: "Copy your links to clipboard and share with ease.",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fill-rule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Delete Links",
    description:
      "Delete links that you no longer need. Keep your link vault organized.",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 256 256"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M237.24,213.21C216.12,203,204,180.64,204,152V134.73a19.94,19.94,0,0,0-12.62-18.59l-24.86-9.81a4,4,0,0,1-2.26-5.14l21.33-53A32,32,0,0,0,167.17,6,32.13,32.13,0,0,0,126.25,24.2l-.07.18-21,53.09a3.94,3.94,0,0,1-2.14,2.2,3.89,3.89,0,0,1-3,.06L74.6,69.43A19.89,19.89,0,0,0,52.87,74C31.06,96.43,20,122.68,20,152a115.46,115.46,0,0,0,32.29,80.3A12,12,0,0,0,61,236H232a12,12,0,0,0,5.24-22.79ZM68.19,92.73,91.06,102A28,28,0,0,0,127.5,86.31l20.95-53a8.32,8.32,0,0,1,10.33-4.81,8,8,0,0,1,4.61,10.57,1.17,1.17,0,0,0,0,.11L142,92.29a28.05,28.05,0,0,0,15.68,36.33L180,137.45V152c0,1,0,2.07.05,3.1l-122.44-49A101.91,101.91,0,0,1,68.19,92.73ZM116.74,212a83.73,83.73,0,0,1-22.09-39,12,12,0,0,0-23.25,6,110.27,110.27,0,0,0,14.49,33H66.25A91.53,91.53,0,0,1,44,152a84,84,0,0,1,3.41-24.11l136.67,54.66A86.58,86.58,0,0,0,198.66,212Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Name Your Links",
    description: "Easily identify your links by giving them custom names.",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Pin Links",
    description: "Easily pin your important links to the top of your vault.",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="url(#gradient)"
          d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Drag and arrange links",
    description: "Easily drag and arrange your links to keep them organized.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 15 15"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="#2a4ff6" />
            <stop offset="100%" stopColor="#5ce1e6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z"
        ></path>
      </svg>
    ),
  },
];

export const getstarted = [
  {
    icon: <MdDownload />,
    heading: "Download ",
    text: "Download and add Link Vault Chrome Extension to your browser.",
  },
  {
    icon: <MdOutlinePushPin />,
    heading: "Pin Extension",
    text: "Pin the extension to your browser for easy access to your links.",
  },
  {
    icon: <MdOutlineAddLink />,
    heading: "Start Saving Links",
    text: "Start saving and organizing your links with ease.",
  },
];
