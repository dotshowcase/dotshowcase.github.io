export default function Dotfiles() {
  const dotfiles = [
    { id: 0, username: "LazyVim", description: "a modern distro", link: "https://github.com/LazyVim/starter" },
    { id: 1, username: "NvChad", description: "a fast distro", link: "https://github.com/NvChad/starter" },
    { id: 2, username: "AstroNvim", description: "a feature full distro", link: "https://github.com/AstroNvim/template" },
    { id: 3, username: "LunarVim", description: "a distro for who wants everything", link: "https://github.com/lunarvim/lunarvim" },
    { id: 4, username: "nvim-mini", description: "a distro for mini.nvim lovers", link: "https://github.com/nvim-mini/MiniMax" },
    { id: 5, username: "folke", description: "folke's neovim dotfiles", link: "https://github.com/folke/dot/tree/master/nvim" },
    { id: 6, username: "echasnovski", description: "echasnovski's neovim dotfiles", link: "https://github.com/echasnovski/nvim" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Neovim Dotfiles</h2>
      <div className="overflow-hidden border border-gray-200 shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-neutral-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Link</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-neutral-900">
            {dotfiles.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a href={item.link} className="text-blue-600 hover:text-blue-900 underline">Click here</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
