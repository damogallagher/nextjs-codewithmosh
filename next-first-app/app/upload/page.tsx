'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');


    return (
        <>
            {publicId &&
                <CldImage src={publicId} width={270} height={180} alt={"My Image"} />
            }

            <CldUploadWidget
                uploadPreset='l728olr9'
                onUploadAdded={(result, widget) => {
                    console.log("result", result)
                    if (result.event !== 'upload_added') return;
                    const info = result.info as CloudinaryResult;
                    console.log("info", info)
                    setPublicId(info.public_id)
                }}>
                {({ open }) =>
                    <button
                        className='btn btn-primary'
                        onClick={() => open()}>
                        Upload
                    </button>
                }
            </CldUploadWidget>
        </>
    )
}

export default UploadPage