export const LogoRow = ({logoRow}: {logoRow: {photos: string}[]}) => {
   return (
      <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap px-5">
         {logoRow.map((item, index) => (
            <div key={index}>
               <img
                  src={item.photos}
                  alt="logo"
                  style={{width: "10rem", height: "auto"}}
               />
            </div>
         ))}
      </div>
   )
}
