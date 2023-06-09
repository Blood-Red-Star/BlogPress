import { getUser } from "./userService";

const convertHexToBuffer = (hexString) => {
    console.log(hexString);
    return Uint8Array.from(
      hexString.match(/[0-9a-f]{1,2}/gi).map((byte) => parseInt(byte, 16))
    );
  };
  
  const convertBufferToHex = (buffer) => {
    return (
      [...new Uint8Array(buffer)]
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('')
    );
  };
  
  const deriveKeyFromPassword = async (passwordString, saltBuffer) => {
    // We'll use a TextEncoder to convert strings into arrays of bytes:
    const textEncoder = new TextEncoder();
  
    // Convert the password string into an array of bytes:
    const passwordBuffer = textEncoder.encode(passwordString);
  
    // Use WebCrypto to generate an array of 16 random bytes if one isn't passed
    // in:
    saltBuffer =
      saltBuffer ||
      window.crypto.getRandomValues(new Uint8Array(16));
  
    // Convert our passwordBuffer into something WebCrypto understands:
    const plaintextKey = await window.crypto.subtle.importKey(
      'raw', // We're working with a "raw" array of bytes
      passwordBuffer, // Pass in our (converted) password byte array
      'PBKDF2', // Tell WebCrypto our byte array doesn't contain anything fancy
      false, // We don't want anyone to extract the original password!
      ['deriveBits'] // We're gonna use this method to derive a key (below)
    );
  
    const pbkdf2Buffer = await window.crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: 100000,
        hash: 'SHA-256'
      },
      plaintextKey,
      64 * 8
    );
  
    const saltString = convertBufferToHex(saltBuffer);
    const keyString = convertBufferToHex(pbkdf2Buffer);
  
    // Return the key and salt as hexadecimal strings
    return { keyString, saltString };
  };
    export function LoginSystem (Username, Password){
        getUser(Username).then((user) => {
            const salt = convertHexToBuffer(user['user']['salt']);
                deriveKeyFromPassword(Password, salt).then((key) => {
                    const requestOptions = {
                        method: "post", 
                        headers: {
                            "Content-Type": "application/json", 
                            "Authorization": "bearer 07b0731d-1e1d-41c4-b11f-42660809f386"
                        },
                        body: JSON.stringify({
                            key: key["keyString"]
                        })
                    }
                    return fetch ("https://blogpress.api.hscc.bdpa.org/v1/users/" + Username + "/auth", requestOptions)
                        .then(res => {res.json().then(data => console.log(data))})
                })
            

        })
    }