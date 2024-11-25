interface Props {
  icon_type?: "fill" | "stroke";
}
const CustomerIcon = ({ icon_type = "fill" }: Props) => {
  return (
    <>
      {icon_type === "fill" ? (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8704 7.87037C13.8704 9.73177 12.3614 11.2407 10.5 11.2407C8.63862 11.2407 7.12966 9.73177 7.12966 7.87037C7.12966 6.00897 8.63862 4.5 10.5 4.5C12.3614 4.5 13.8704 6.00897 13.8704 7.87037ZM8.12082 12.6852H12.8792C13.6526 12.686 14.394 12.9377 14.9409 13.3851C15.4878 13.8325 15.7954 14.4391 15.7963 15.0719V17.5H5.20374V15.0719C5.20467 14.4391 5.5123 13.8325 6.05916 13.3851C6.60602 12.9377 7.34745 12.686 8.12082 12.6852Z"
            fill="#616161"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0001 3.5C8.06706 3.5 6.50006 5.067 6.50006 7C6.50006 8.933 8.06706 10.5 10.0001 10.5C11.9331 10.5 13.5001 8.933 13.5001 7C13.5001 5.067 11.9331 3.5 10.0001 3.5ZM8.00006 7C8.00006 5.89543 8.89549 5 10.0001 5C11.1046 5 12.0001 5.89543 12.0001 7C12.0001 8.10457 11.1046 9 10.0001 9C8.89549 9 8.00006 8.10457 8.00006 7Z"
            fill="#616161"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.484 14.7268C14.3776 12.7352 12.2784 11.5 10.0001 11.5C7.72175 11.5 5.62253 12.7352 4.51609 14.7268L4.07943 15.5128C3.58412 16.4043 4.22881 17.5 5.24873 17.5H14.7514C15.7713 17.5 16.416 16.4043 15.9207 15.5128L15.484 14.7268ZM5.82733 15.4552C6.66921 13.9398 8.2665 13 10.0001 13C11.7336 13 13.3309 13.9398 14.1728 15.4552L14.4754 16H5.52469L5.82733 15.4552Z"
            fill="#616161"
          />
        </svg>
      )}
    </>
  );
};

export default CustomerIcon;