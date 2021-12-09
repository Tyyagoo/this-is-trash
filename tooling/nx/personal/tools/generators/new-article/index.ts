import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

interface NewArticleSchemaOptions {
  title: string;
  author?: string;
}

function slugify(str) {
  /**
   * Source:
   * https://lucidar.me/en/web-dev/how-to-slugify-a-string-in-javascript/
   *
   * TODO:
   *  Implement this by myself, cuz this breaks if we add an REAL EMOJI :(
   *  'Why you shouldn't use Nx as your monorepo manager :('
   *  turns into:
   *  'why-you-shouldnt-use-nx-as-your-monorepo-manager-'
   */
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();
  var from =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
  var to =
    'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
  for (var i = 0, l = from.length; i < l; i++)
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  return str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), './_articles', {
    title: schema.title,
    author: schema.author ?? 'Tyyagoo',
    creationDate: new Date().toISOString(),
    slug: slugify(names(schema.title).fileName),
  });

  await formatFiles(tree);
}
