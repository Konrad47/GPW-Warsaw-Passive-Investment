import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/numbers.css"

const Numbers = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="n-container n-background-attachment">
        <div className="container">
          {/* <div className="n-number-container">
            <div>
              <svg
                className="n-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_2002_2921)">
                  <path
                    d="M19.9998 3.33331C21.648 3.33331 23.2592 3.82205 24.6296 4.73773C26 5.65341 27.0681 6.9549 27.6988 8.47762C28.3296 10.0003 28.4946 11.6759 28.173 13.2924C27.8515 14.9089 27.0578 16.3938 25.8924 17.5592C24.727 18.7246 23.2421 19.5183 21.6256 19.8399C20.0091 20.1614 18.3335 19.9964 16.8108 19.3656C15.2881 18.7349 13.9866 17.6668 13.0709 16.2964C12.1552 14.926 11.6665 13.3148 11.6665 11.6666L11.6748 11.305C11.768 9.15956 12.6858 7.13294 14.2369 5.64775C15.7879 4.16255 17.8524 3.33344 19.9998 3.33331Z"
                    fill="#BA4D30"
                  />
                  <path
                    d="M23.3335 23.3333C25.5436 23.3333 27.6632 24.2113 29.2261 25.7741C30.7889 27.3369 31.6668 29.4565 31.6668 31.6666V33.3333C31.6668 34.2174 31.3156 35.0652 30.6905 35.6903C30.0654 36.3155 29.2176 36.6666 28.3335 36.6666H11.6668C10.7828 36.6666 9.93493 36.3155 9.30981 35.6903C8.68469 35.0652 8.3335 34.2174 8.3335 33.3333V31.6666C8.3335 29.4565 9.21147 27.3369 10.7743 25.7741C12.3371 24.2113 14.4567 23.3333 16.6668 23.3333H23.3335Z"
                    fill="#BA4D30"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2002_2921">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="p-number">{t`numbers.number`}</p>
                <p className="p-number-desc">{t`numbers.number-desc`}</p>
              </div>
            </div>
            <div>
              <svg
                className="n-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_2002_2902)">
                  <path
                    d="M31.6668 6.66669H8.3335C7.00741 6.66669 5.73564 7.19347 4.79796 8.13115C3.86028 9.06884 3.3335 10.3406 3.3335 11.6667V28.3334C3.3335 29.6594 3.86028 30.9312 4.79796 31.8689C5.73564 32.8066 7.00741 33.3334 8.3335 33.3334H31.6668C32.9929 33.3334 34.2647 32.8066 35.2024 31.8689C36.14 30.9312 36.6668 29.6594 36.6668 28.3334V11.6667C36.6668 10.3406 36.14 9.06884 35.2024 8.13115C34.2647 7.19347 32.9929 6.66669 31.6668 6.66669ZM15.0002 11.6667C15.425 11.6672 15.8336 11.8298 16.1424 12.1214C16.4513 12.413 16.6372 12.8116 16.6621 13.2357C16.687 13.6597 16.549 14.0773 16.2764 14.4031C16.0037 14.7288 15.617 14.9382 15.1952 14.9884L15.0002 15H11.6668V18.3334C11.6668 18.7416 11.5169 19.1356 11.2456 19.4406C10.9744 19.7457 10.6006 19.9406 10.1952 19.9884L10.0002 20C9.59194 20 9.19793 19.8501 8.89288 19.5788C8.58782 19.3076 8.39292 18.9338 8.34516 18.5284L8.3335 18.3334V13.3334C8.33355 12.9251 8.48342 12.5311 8.75469 12.2261C9.02595 11.921 9.39974 11.7261 9.80516 11.6784L10.0002 11.6667H15.0002ZM30.0002 20C30.4084 20.0001 30.8024 20.1499 31.1075 20.4212C31.4125 20.6925 31.6074 21.0663 31.6552 21.4717L31.6668 21.6667V26.6667C31.6668 27.0749 31.5169 27.4689 31.2456 27.774C30.9744 28.079 30.6006 28.2739 30.1952 28.3217L30.0002 28.3334H25.0002C24.5754 28.3329 24.1668 28.1702 23.8579 27.8786C23.549 27.587 23.3631 27.1884 23.3382 26.7644C23.3133 26.3403 23.4513 25.9227 23.7239 25.597C23.9966 25.2712 24.3833 25.0619 24.8052 25.0117L25.0002 25H28.3335V21.6667C28.3336 21.2585 28.4834 20.8645 28.7547 20.5594C29.026 20.2543 29.3997 20.0594 29.8052 20.0117L30.0002 20Z"
                    fill="#B34F66"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2002_2902">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="p-number">{t`numbers.number2`}</p>
                <p className="p-number-desc">{t`numbers.number-desc2`}</p>
              </div>
            </div>
            <div>
              <svg
                className="n-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_2002_3501)">
                  <path
                    d="M29.4283 20.0117C29.0392 20.0517 28.6665 20.1896 28.3451 20.4126C28.0236 20.6355 27.7638 20.9362 27.59 21.2867L26.165 24.1583L22.9867 24.62C22.12 24.74 21.3867 25.3533 21.1133 26.1933L21.05 26.4267C20.8833 27.2017 21.1267 28.0167 21.705 28.5767L24 30.805L23.4567 33.9583C23.3854 34.3842 23.4343 34.8214 23.5979 35.221C23.7615 35.6205 24.0332 35.9666 24.3826 36.2202C24.732 36.4738 25.1451 36.625 25.5757 36.6568C26.0063 36.6886 26.4372 36.5996 26.82 36.4L29.6667 34.9083L32.5133 36.4017C32.8954 36.6028 33.326 36.693 33.7566 36.662C34.1873 36.6311 34.6006 36.4803 34.95 36.2267L35.1367 36.0767C35.429 35.8147 35.65 35.4827 35.7789 35.1118C35.9077 34.741 35.9402 34.3435 35.8733 33.9567L35.3317 30.805L37.6317 28.5733C38.265 27.955 38.4917 27.0333 38.2183 26.195L38.1333 25.9717C37.9738 25.6138 37.726 25.3022 37.4132 25.0661C37.1005 24.83 36.7329 24.6771 36.345 24.6217L33.1667 24.1583L31.745 21.2883C31.5527 20.9015 31.2563 20.576 30.8892 20.3484C30.522 20.1208 30.0986 20.0001 29.6667 20L29.4283 20.0117Z"
                    fill="#961D8A"
                  />
                  <path
                    d="M10.0948 20.0117C9.70569 20.0517 9.33301 20.1896 9.01156 20.4126C8.69011 20.6355 8.43035 20.9362 8.2565 21.2867L6.8315 24.1583L3.65317 24.62C2.7865 24.74 2.05317 25.3533 1.77983 26.1933L1.7165 26.4267C1.54983 27.2017 1.79317 28.0167 2.3715 28.5767L4.6665 30.805L4.12317 33.9583C4.05193 34.3842 4.10084 34.8214 4.2644 35.221C4.42796 35.6205 4.6997 35.9666 5.04908 36.2202C5.39846 36.4738 5.81164 36.625 6.24221 36.6568C6.67279 36.6886 7.10368 36.5996 7.4865 36.4L10.3332 34.9083L13.1798 36.4017C13.5619 36.6028 13.9925 36.693 14.4232 36.662C14.8538 36.6311 15.2671 36.4803 15.6165 36.2267L15.8032 36.0767C16.0955 35.8147 16.3165 35.4827 16.4454 35.1118C16.5742 34.741 16.6067 34.3435 16.5398 33.9567L15.9998 30.805L18.2998 28.5733C18.9332 27.955 19.1598 27.0333 18.8865 26.195L18.8015 25.9717C18.6419 25.6138 18.3942 25.3022 18.0814 25.0661C17.7686 24.83 17.4011 24.6771 17.0132 24.6217L13.8332 24.1567L12.4115 21.2867C12.219 20.9001 11.9225 20.575 11.5554 20.3477C11.1882 20.1204 10.765 20 10.3332 20L10.0948 20.0117Z"
                    fill="#961D8A"
                  />
                  <path
                    d="M19.7618 3.34498C19.3727 3.385 19 3.52292 18.6786 3.74586C18.3571 3.96881 18.0973 4.26953 17.9235 4.61998L16.4985 7.49165L13.3202 7.95331C12.4535 8.07331 11.7202 8.68665 11.4468 9.52665L11.3835 9.75998C11.2168 10.535 11.4602 11.35 12.0385 11.91L14.3335 14.1383L13.7902 17.2916C13.7189 17.7175 13.7678 18.1547 13.9314 18.5543C14.095 18.9538 14.3667 19.2999 14.7161 19.5535C15.0655 19.8072 15.4786 19.9583 15.9092 19.9901C16.3398 20.0219 16.7707 19.9329 17.1535 19.7333L20.0002 18.2433L22.8485 19.7366C23.2305 19.9378 23.6612 20.0279 24.0918 19.997C24.5224 19.9661 24.9358 19.8153 25.2852 19.5616L25.4718 19.4116C25.7642 19.1496 25.9852 18.8176 26.114 18.4468C26.2429 18.076 26.2754 17.6785 26.2085 17.2916L25.6668 14.1383L27.9668 11.9066C28.6002 11.2883 28.8268 10.3666 28.5535 9.52831L28.4685 9.30498C28.3089 8.94707 28.0612 8.63549 27.7484 8.39939C27.4356 8.16329 27.0681 8.01038 26.6802 7.95498L23.5002 7.48998L22.0785 4.61998C21.886 4.23346 21.5895 3.90828 21.2224 3.68098C20.8552 3.45369 20.432 3.33329 20.0002 3.33331L19.7618 3.34498Z"
                    fill="#961D8A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2002_3501">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="p-number">{t`numbers.number3`}</p>
                <p className="p-number-desc">{t`numbers.number-desc3`}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Numbers
