export const capitalizeFirstLetter = (word: string)  => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
  

export const convertToLowerCaseAndReplaceSpaces = (word: string) => {
    // Convert the string to lowercase
    const lowercaseString = word.toLowerCase();
    // Replace spaces with underscores
    const resultString = lowercaseString.replace(/\s/g, '_');
  
    return resultString;
}
  

export const imageUrl = (imageName: string): string => {

    const cdn_base_url = process.env.CDN_DOMAIN as string;
    const imageUrl = `${cdn_base_url}/${imageName}`;

    return imageUrl;
}

export const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}

export const hashText = async (text: string | undefined, algorithm: AlgorithmIdentifier) => {
    const data = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    return Array.from(new Uint8Array(hashBuffer), byte => byte.toString(16).padStart(2, '0')).join('');
  };


  