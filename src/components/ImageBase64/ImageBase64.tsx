import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

import { useImageBase64 } from "../../api/api";

const ImageToBase64 = ({ url }: { url: string }) => {
  const { data: base64Image } = useImageBase64(url);

  return (
    <div>
      {base64Image ? (
        <Avatar size={300} src={base64Image} />
      ) : (
        <Avatar size={300} icon={<UserOutlined />}/>
      )}
    </div>
  );
};

export default ImageToBase64;
