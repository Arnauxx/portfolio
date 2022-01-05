const LinksSocialMedia = {
  Github: 'Arnauxx',
  Youtube: 'channel/UC_hb_vUSGR8VV2si6rOF9pg',
  Facebook: 'stevan.silvaanx',
  Instagram: 'stevanfcgg',
  Twitter: '#'
}

function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')

    li.children[0].href = `https://www.${Social}.com/${LinksSocialMedia[Social]}`
  }
}

/* GitHub.href = `https://github.com/${LinksSocialMedia.Github}` */

ChangeSocialMediaLinks()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.Github}`

  fetch(url)
    .then(response => response.json()) //converte para json
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

GetGitHubProfileInfos()
