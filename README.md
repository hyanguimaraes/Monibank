<h1 align="center">Monibank</h1>

![](https://raw.githubusercontent.com/hyanguimaraes/Monibank/main/readme/Monibank_desktop_finalizado_capa.gif#vitrinedev)

![](https://img.shields.io/github/forks/hyanguimaraes/Monibank?style=social) ![](https://img.shields.io/github/last-commit/hyanguimaraes/Monibank?style=plastic)

📝 Descrição do projeto
---
Página Monibank: Formulário de cadastro de conta fictícia com diversos tipos de validações de dados sendo alguns no próprio HTML e outros via JavaScript. Ao fazer o seu cadastro, o usuário é direcionado à uma página onde ele deve tirar uma foto direto do navegador, usando a câmera do dispositivo, para envio dos dados e abertura de conta.

O objetivo deste estudo era aprender a fazer diversos tipos de validações de dados usando HTML5 e JavaScript: Além das validações de campos obrigatórios e limites mínimos e máximos de caracteres em certos campos, também foi aplicada, através do JavaScript, uma verificação de número de CPF que, primeiramente invalida números repetidos como "111.111.111-11" e também se o CPF digitado é valido, através da verificação dos dois últimos dígitos do mesmo.
Também via JavaScript, foi criada uma verificação de data de nascimento, de modo que o usuário só pode continuar com o cadastro caso seja maior de idade (18 anos ou mais). As informações fornecidas pelo usuário, juntamente com a imagem são salvas, neste caso, no _local storage_ do browser do usuário, uma vez que o foco do projeto eram as validações em sí.


Assim, os arquivos HTML e CSS da foram fornecidos pela Alura para estudo no curso "JavaScript: Validando formulários". Os _scripts_ foram separados em módulos:
1. script.js: Possui as chamadas das funções de verificações dos campos de input e mensagens de erro personalizadas para cada campo, assim como toda a lógica necessária para que isto ocorra. Aqui também se encontra as funções para envio das informações para o _local storage_.
2. validacaoCPF.js: Possui exclusivamente o código responsável pela validação do campo de CPF com verificação de números repetidos e digitos do CPF.
3. validacaoIdade.js: Possui exclusivamente o código responsável pela validação de maioridade do usuário.
4. camera.js: Possui toda o código de acesso necessária para manipulação do DOM, ativação da câmera do dispositivo do usuário, captura da imagem e envio para o _local storage_.

O projeto Monibank foi todo desenvolvido seguindo a metodologia _Mobile first_.

<h3>✅ Versão mobile 428px 📱</h3>

![](https://raw.githubusercontent.com/hyanguimaraes/Monibank/main/readme/Monibank_mobile_finalizado.gif)

<h3>✅ Versão tablet 1024px 📱</h3>

![](https://raw.githubusercontent.com/hyanguimaraes/Monibank/main/readme/Monibank_tablet_finalizado.gif)

<h3>✅ Versão desktop 1728px 🖥️</h3>

![](https://raw.githubusercontent.com/hyanguimaraes/Monibank/main/readme/Monibank_desktop_finalizado.gif)


[🔗 Acesse o projeto](ALTERAR)
[🔗 Acesse o meu portfólio](https://cursos.alura.com.br/vitrinedev/hyangt)
[🔗 Acesse o meu LinkedIn](https://www.linkedin.com/in/hyanguimaraes/)

[📚 Página do curso "JavaScript: Validando Formulários" na plataforma Alura](https://cursos.alura.com.br/course/javascript-validando-formularios)

🛠️ Tecnologias utilizadas
---
- ``HTML5``
- ``CSS3``
- ``JavaScript``

✍🏻 Autor
---
 [<img src="https://avatars.githubusercontent.com/u/112709798?s=400&u=bf197a3880a44c701b3303e07c052a74cb8d96b1&v=4" width=115><br><sub>Hyan Nascimento Guimarães</sub>](https://github.com/hyanguimaraes)