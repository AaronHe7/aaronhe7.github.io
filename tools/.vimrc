set ruler
set ts=4
set sw=4
set smartindent
set backspace=indent,eol,start

cd %:h

inoremap {<CR> {<CR>}<Esc>O
imap <C-BS> <C-W>
syntax enable

autocmd BufNewFile *.cpp 0r ~/.vim/templates/skeleton.cpp
autocmd filetype cpp nnoremap <C-N> :w <bar> !g++ -std=c++14 % -o %:r -Wl,--stack,268435456 && %:r<CR>

set number
augroup numbertoggle
    autocmd!
    autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
    autocmd BufLeave,FocusLost,InsertEnter * set norelativenumber
augroup END
