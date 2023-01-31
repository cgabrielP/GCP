import { CldUploadButton } from 'next-cloudinary';
import React from 'react'
import FormProduct from '../components/FormProduct'

const prueba = () => {
  return (
    <>
      <CldUploadButton
        className={styles.button}
        onUpload={(error, result, widget) => {
          setResource(result?.info); // Updating local state with asset details
          widget.close(); // Close widget immediately after successful upload
        }}
        signatureEndpoint="/api/sign-cloudinary-params"
        uploadPreset="next-cloudinary-signed"
      >
        Upload to Cloudinary
      </CldUploadButton>
      <FormProduct />
    </>
  )
}

export default prueba