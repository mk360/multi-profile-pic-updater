import style from "styled-components";

interface ProfileCardProps {
    src: string;
    name: string;
}

const ProfileContainer = style.div`
    border: 1px solid red;
`;

const ProfileImage = style.img`
    border-radius: 50px;
`;

function ProfileCard(props: ProfileCardProps) {
    const { src, name } = props;

    return (
        <ProfileContainer>
            <ProfileImage src={src} />
            <span>
                {name}
            </span>
        </ProfileContainer>
    );
};

export default ProfileCard;
